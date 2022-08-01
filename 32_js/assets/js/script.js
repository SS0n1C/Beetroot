let list = [
    { name: "beer", count: 7, buying: true, price: 16, summ: " " },
    { name: "apple", count: 8, buying: false, price: 5, summ: " ", },
    { name: "milk", count: 7, buying: true, price: 10, summ: " ", },
    { name: "beef", count: 5, buying: false, price: 20, summ: " ", },
    { name: "tomat", count: 3, buying: false, price: 3, summ: " " },
]
for (i = 0; i < list.length; i++) {
    list[i].summ = list[i].price * list[i].count;
}


// // Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
let sortList = (a, b) => a.buying > b.buying ? 1 : -1;
    list.sort(sortList); 

// // Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
function add (name, buy){
    buy = true;
    console.log(name, buy);
}
add(list[2].name,list[2].buying)

// Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)
let list2 = list.slice(1);


// Додавання покупки в список.Враховуй, що при додаванні покупки з уже існуючим в списку 
// продуктом, необхідно збільшувати кількість в існуючій покупці, а не додавати нову.
let findList = list.find(item => item.name === "milk")
if(findList){
    findList.count +=10;
    findList.price += 8;
} else{
    list.push(
        { name: "milk", count: 10, buying: false, price: 8, summ: " " },
    )
}
for (i = 0; i < list.length; i++) {
    list[i].summ = list[i].price * list[i].count;
}


// Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.
function notBuy(arr){
    let item = 0;
    for (i = 0; i < arr.length; i++) {
            item += arr[i].summ; 
    }
    console.log(item);
}
notBuy(list);

// Підрахунок суми всіх (не) придбаних продуктів.
let list4 = list.filter(el => el.buying > 0);
function notBuy(arr){
    let item = 0;
    for (i = 0; i < arr.length; i++) {
            item += arr[i].summ; 
    }
    console.log(item);
}
notBuy(list4);

// Показання продуктів в залежності від суми,
let sortList2 = (a, b) => a.summ > b.summ ? 1 : -1;
    list.sort(sortList2); 

list.forEach(listen => {
    console.log(listen)
});
