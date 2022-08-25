// const URL = 'https://reqres.in/api'
// async function getUsers() {
//   const response = await fetch(`${URL}/users`, {mode: 'cors'})
//   const respJSON = await response.json()
//   return respJSON.data
// }
// $(function(){
//   const container = $('#demo')
//   getUsers().then((users) => {
//     console.log('users', users)
//     users.forEach(user => {
//       const card = $(`<div class="card" id='${user.id}'></div>`)
//       const image = $(`<img class="avatar" src='${user.avatar}'>`)
//       console.log('image', image)
//       const info =$(`<div class="info"></div>`)
      
//       info.append($(`<div class="fullname">name: ${user.first_name} ${user.last_name}</div>`))
//       info.append($(`<div class="email">email: ${user.email}</div>`))
//       info.append($(`<div class="id">ID: ${user.id}</div>`))
//       info.append($(`<button class="update" onclick='updateUser(${user.id})'>UPDATE</button>`))
//       info.append($(`<button class="delete" onclick='deleteUser(${user.id})'>DELETE</button>`))
      
//       card.append(image)
//       card.append(info)
//       container.append(card)
//     })
//   })
// })





// let myKey = ("&apikey=46dfcae7")
// async function getFilm(){
//     let test = await fetch("http://www.omdbapi.com/?t=Home" + myKey)
//     let test2 = await test.json()
//     return test2
// }
// getFilm().then(test3 =>{
//     for (const [key, value] of Object.entries(test3.Actors)) {
//           console.log(`${key}: ${value}`);
//         }
// })

let search = $("#test").values();
console.log(test2)
