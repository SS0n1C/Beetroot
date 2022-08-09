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



// var playList = [
//     {author: "LED ZEPPELIN", song:"STAIRWAY TO HEAVEN"},
//     {author: "QUEEN", song:"BOHEMIAN RHAPSODY"},
//     {author: "LYNYRD SKYNYRD", song:"FREE BIRD"},
//     {author: "DEEP PURPLE", song:"SMOKE ON THE WATER"},
//     {author: "JIMI HENDRIX", song:"ALL ALONG THE WATCHTOWER"},
//     {author: "AC/DC", song:"BACK IN BLACK"},
//     {author: "QUEEN", song:"WE WILL ROCK YOU"},
//     {author: "METALLICA", song:"ENTER SANDMAN"} 
// ];

let divS = document.createElement("div");
let playList = document.createElement("ol");
let item1= document.createElement("li");
let item2 = document.createElement("li");
let item3 = document.createElement("li");
let item4 = document.createElement("li");
let item5 = document.createElement("li");
let item6 = document.createElement("li");
let item7 = document.createElement("li");
let item8 = document.createElement("li");
document.body.appendChild(divS);
divS.prepend(playList);
playList.prepend(item1);
playList.prepend(item2);
playList.prepend(item3);
playList.prepend(item4);
playList.prepend(item5);
playList.prepend(item6);
playList.prepend(item7);
playList.prepend(item8);

item8.innerHTML = {
    author: "LED ZEPPELIN", 
    song:"STAIRWAY TO HEAVEN"
}
item7.innerText = "author: QUEEN" + "song:BOHEMIAN RHAPSODY"


console.log(item8);
console.log(playList);







