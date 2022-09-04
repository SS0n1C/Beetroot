$(document).ready(() =>  {

let key = "&APPID=3020455e36a8cb93ab53673539958392"
let lat = "49.2827291"
let lon = "-123.1207375"
async function weatherAPI(){
    let URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}3&lon=${lon}&dt&exclude=hourly,daily&units=metric${key}`
    const res = await fetch(`${URL}`);
    const data = await res.json();
    return data
}

if (document.cookie === "") {
    getweather()
    console.log("use API")
  
} else {
    getcookie()
    console.log("use storage")
} 

function get_cookie ( cookie_name ){
  var results = document.cookie.match ( '(^|;) ?' + cookie_name + '=([^;]*)(;|$)' );
  if ( results )
    return ( unescape ( results[2] ) );
  else
    return null;
}

function getweather(){
weatherAPI().then((test)=>{
    document.cookie  = `name = ${JSON.stringify(test)}; max-age=7200`
    let cookieBody = get_cookie ("name")
    let weathercoockie = JSON.parse(cookieBody)
    let cord = weathercoockie.coord
    let wind= weathercoockie.wind
    let sky = weathercoockie.weather
    let temp = weathercoockie.main
    for(let key in cord){
        $(".weatherCard__cord").append( key + " = " + cord[key] +" ")
    }
    $(".main__name").append(test.name)

    $(".main__country").append(test.sys.country)
    sky.forEach(element => {
        $(".main__weather--weather").append(element.description)
    })
    for(let key in wind){
        $(".main__weather--wind").append("wind "+ key + " = " + wind[key] +"<br>")
    }
    for(let key in temp){
        $(".main__temp").append("<p>"+ key, temp[key]+"</p>")
       
       
    }
    $("main__temp").append(test.main)
    $(".weahterCard_vis").append("visibility:" + weathercoockie.visibility + "M")
    
    
})
}
function getcookie(){
    let cookieBody = get_cookie ("name")
    let weathercoockie = JSON.parse(cookieBody)
    let cord = weathercoockie.coord
    let wind= weathercoockie.wind
    let sky = weathercoockie.weather
    let temp = weathercoockie.main
    for(let key in cord){
        $(".weatherCard__cord").append( key + " = " + cord[key] +" ")
    }
    $(".main__name").append(weathercoockie.name)

    $(".main__country").append(weathercoockie.sys.country)
    sky.forEach(element => {
        $(".main__weather--weather").append(element.description)
    })
    for(let key in wind){
        $(".main__weather--wind").append("wind "+ key + " = " + wind[key] +"<br>")
    }
    for(let key in temp){
        $(".main__temp").append("<p>"+ key, temp[key]+"</p>")
    }
    $("main__temp").append(weathercoockie.main)
    $(".weahterCard_vis").append("visibility:" + weathercoockie.visibility + "M")
}
})
