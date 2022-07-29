// Мінімум

// Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, 
// середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
// Метод, який виводить на екран інформацію про автомобіль.
// Додавання ім’я водія у список
// Перевірка водія на наявність його ім’я у списку
// Підрахунок необхідного часу та кількості палива для подолання переданої відстані
// з середньою швидкістю.Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину.

// let car = {
//     developer: "zaz",
//     model: "Zaporozhets",
//     "production year": 1968,
//     "speed": 60,
//     "tank size": 35,
//     "fuel": 10,
//     driver: {
//     },
//     carway(way) {
//         let timeInWay = (way / this.speed);
//         let wayWithRest = (timeInWay % 4) == 0 ? (timeInWay / 4 | 0) - 1 : timeInWay / 4 | 0;
//         let result = timeInWay + wayWithRest;
//         let gas = way / this.fuel;
//         console.log(`Your time is ${result.toFixed(1)} hour`);
//         console.log(`${gas.toFixed(1)}L`);
//     },
// }
// car.carway(241);
// for (let key in car) {
//     document.write(`<br>${key}: ${car[key]} <br>`);
// }
// car.driver = {
//     firstDriver: "Ivan",
//     secondtDriver: "Taras",
//     thirtyDriver: "Andrey",
// }
// for (let key in car.driver) {
//     document.write(`<br>${key}: ${car.driver[key]} <br><hr>`);
// }
// if (car?.driver?.firstDriver) {
//     alert("Ivan is on a list")
// } else {
//     alert("Ivan is not on a list")
// }

let time = {
    second: this.minute / 60,
    minute: 1,
    hour: this.minute * 60,

    getTime(X){
        let time2 = X / this.hour;
        console.log(time2);
    }
    
}
time.getTime(300);





