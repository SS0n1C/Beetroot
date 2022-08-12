// let p = document.createElement('p')
// p.innerText='Create an HTML page that will contain text and a button.'
// p.setAttribute('id', 'myId')
// // p.style.display = 'block'
// p.style.opacity = 1
// document.body.appendChild(p)
// let btn = document.createElement('button')
// btn.innerText = 'Show text'

// btn.onclick = () => {
//     let p = document.getElementById('myId')
//     p.style.opacity === '1'? p.style.opacity =0: p.style.opacity=1
// }


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





