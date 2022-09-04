
$(document).ready(() =>  {
    $("<div id ='paginator'>SHOW MORE<div/>").addClass("pagination__field").appendTo(".pagination") 
    $("#searchButton").click(myi)
    function myi(){
        let textField = $("#textField").val()
        let typeField = $("#type").val()
        let counter = "0"
        let paginationButton = ++counter 
        console.log(paginationButton)
        console.log(textField)
        
        test()
        async function getFilm(){
            let URL = `https://omdbapi.com/?s=${textField}&type=${typeField}&page=${paginationButton}&apikey=46dfcae7`
            const res = await fetch(`${URL}`);
            const data = await res.json();
            return data
        }
        function test(){
        getFilm().then((searched) =>{
           try{
            let result= searched.Search
            console.log(result)
            result.forEach(element => {
                const main = $(".filmField")
               const block = $("<div></div>").addClass("filmField__item")
               const title = $("<div></div>").append(element.Title).addClass("filmField__item--title")
               const year = $("<div></div>").append(element.Year).addClass("filmField__item--year")
               const type = $("<div></div>").append(element.Type).addClass("filmField__item--type")
               const poster =$("<div></div>").append(`<img class="avatar" src='${element.Poster}'>`).addClass("filmField__item--poster")
               const button = $('<button type="submit">').append(element.imdbID).addClass("filmField__item--button")
               $(".pagination__field").css({display:"block"})
               block.append(title)
               block.append(year)
               block.append(type)
               block.append(poster)
               block.append(button)
               main.append(block)
            })
        } catch (eror){
            alert("NOT FOUND")
        }

            $(".filmField__item--button").on('click', function() {
                console.log($(this).text())
                let information = $(this).text()
                
                async function getFilmDetail(){
                    let URL = `https://www.omdbapi.com/?i=${information}&plot=full&apikey=46dfcae7`
                    const res = await fetch(`${URL}`);
                    const data = await res.json();
                    return data
                }
    
                getFilmDetail().then((next) =>{
                    let result= next
                    console.log(result)
                    $("<div></div>").append(`<img class="avatar" src='${result.Poster}'>`).appendTo(".informationField__card")
                    for(let key in result){{
                            console.log(key, result[key]);
                            delete result.Poster
                            delete result.Ratings
                            $("<div></div>").append(key).appendTo(".informationField__card").append(`<span>${result[key]}</span>`)
                           
                          }
                    }
                })
            })
  
        })
    }
          
        $("#paginator").on('click', function() {
             paginationButton = ++counter 
            console.log("test" + paginationButton)
            test()
            
        })
            
    }
})
