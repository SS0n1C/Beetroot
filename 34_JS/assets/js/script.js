
// Створити сторінку, що показує нумерований список пісень:
var array = [
    {author: "LED ZEPPELIN", song:"STAIRWAY TO HEAVEN"},
    {author: "QUEEN", song:"BOHEMIAN RHAPSODY"},
    {author: "LYNYRD SKYNYRD", song:"FREE BIRD"},
    {author: "DEEP PURPLE", song:"SMOKE ON THE WATER"},
    {author: "JIMI HENDRIX", song:"ALL ALONG THE WATCHTOWER"},
    {author: "AC/DC", song:"BACK IN BLACK"},
    {author: "QUEEN", song:"WE WILL ROCK YOU"},
    {author: "METALLICA", song:"ENTER SANDMAN"} 
];
let list = document.createElement("ol")
list.id ="textList"
document.body.append(list)
function makeFormatedString(author, song) {
    return author + ' ' + "-" +  song  +  ' ' ;
}

function printText(text) {
    var ul = document.getElementById('textList');
    ul.insertAdjacentHTML('beforeend', '<li>' + text + '</li>');
}

for (var fullText of array.map(function (e) { return makeFormatedString(e.author, e.song); })) {
    printText(fullText);
    console.log(fullText);
}

let block = document.createElement("div")
let openButton = document.createElement("button")
let modal = document.createElement("div")
let modalButon = document.createElement("button")
modal.setAttribute("id", "modalID")
document.body.appendChild(block)
block.appendChild(openButton)
block.appendChild(modal)
block.style.display = "flex"
block.style.justifyContent = "center"
openButton.innerText = "OPEN"
openButton.style.padding = "20px"
modal.innerHTML = "some txt"
modal.appendChild(modalButon)
modalButon.innerText = "close"
modal.style.height ="100px"
modal.style.width ="200px"
modal.style.backgroundColor = "deeppink"
modal.style.display = "none"
modal.style.justifyContent = "center"
modal.style.alignItems = "center"
modal.style.flexDirection ="column"

openButton.onclick = () =>{
    let modal = document.getElementById("modalID")
    modal.style.display = "flex"
    openButton.style.display = "none"
}
modalButon.onclick = () =>{
    let modal = document.getElementById("modalID")
    modal.style.display = "none"
    openButton.style.display = "flex"
}

let lights = document.createElement("div")
let lampBlock = document.createElement("div")
let lamp1 = document.createElement("div")
let lamp2 = document.createElement("div")
let lamp3 = document.createElement("div")
let lampButton = document.createElement("button")
lamp1.setAttribute("class", "lampa")
lamp1.setAttribute("id", "firstLamp")
lamp2.setAttribute("class", "lampa")
lamp2.setAttribute("id", "secondLmap")
lamp3.setAttribute("class", "lampa")
lamp3.setAttribute("id", "thirtyLamp")
document.body.appendChild(lights)
lights.appendChild(lampBlock)
lampBlock.appendChild(lamp1)
lampBlock.appendChild(lamp2)
lampBlock.appendChild(lamp3)
document.body.appendChild(lampButton)
// main block
lights.style.margin = "20px auto"
lights.style.height = "400px"
lights.style.width = "150px"
lights.style.border ="2px black solid"
lights.style.borderRadius = "20px"

// main section
lampBlock.style.display ="flex"
lampBlock.style.flexDirection ="column"
lampBlock.style.alignItems = "center"

// lighter
const demoClass = document.getElementsByClassName('lampa')
for (i = 0; i < demoClass.length; i++) {
    demoClass[i].style.cssText = `
        height:50px;
        width:50px;
        margin:35px;
        border-radius:500px;
        border:2px black solid;
       
        `
    }
// button
lampButton.innerText = "color changer"
lampButton.style.cssText = `
    display:block;
    margin: 0px auto;
    height:50px;
    width:100px;
    background-color:grey;

`
firstLamp.style.backgroundColor ="red"
lampButton.onclick = () =>{
    let a = document.getElementById("firstLamp")
    let b = document.getElementById("secondLmap")
    let c = document.getElementById("thirtyLamp")

   if(a.style.backgroundColor =="red"){
        b.style.backgroundColor ="blue"
        a.style.backgroundColor = "white"
   }
   else if(b.style.backgroundColor =="blue"){
        b.style.backgroundColor ="white"
        c.style.backgroundColor ="green"
   }
   else if(c.style.backgroundColor ="green"){
            c.style.backgroundColor ="white"
            a.style.backgroundColor ="red"
   }
}










