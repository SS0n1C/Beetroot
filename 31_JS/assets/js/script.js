// Мінімум

// Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, 
// середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
// Метод, який виводить на екран інформацію про автомобіль.
// Додавання ім’я водія у список
// Перевірка водія на наявність його ім’я у списку
// Підрахунок необхідного часу та кількості палива для подолання переданої відстані
// з середньою швидкістю.Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину.

let car = {
    developer: "zaz",
    model: "Zaporozhets",
    "production year": 1968,
    "speed": 60,
    "tank size": 35,
    "fuel": 10,
    driver: {
    },
    carway(way) {
        let timeInWay = (way / this.speed);
        let wayWithRest = (timeInWay % 4) == 0 ? (timeInWay / 4 | 0) - 1 : timeInWay / 4 | 0;
        let result = timeInWay + wayWithRest;
        let gas = way / this.fuel;
        console.log(`Your time is ${result.toFixed(1)} hour`);
        console.log(`${gas.toFixed(1)}L`);
    },
}
car.carway(241);
for (let key in car) {
    document.write(`<br>${key}: ${car[key]} <br>`);
}
car.driver = {
    firstDriver: "Ivan",
    secondtDriver: "Taras",
    thirtyDriver: "Andrey",
}
for (let key in car.driver) {
    document.write(`<br>${key}: ${car.driver[key]} <br><hr>`);
}
if (car?.driver?.firstDriver) {
    alert("Ivan is on a list")
} else {
    alert("Ivan is not on a list")
}

// Створити об'єкт, що описує час (години, хвилини, секунди)
let clock = {
    hour: 15,
    minutes: 75,
    seconds: 150,
}
let mins = (clock.hour * 3600) + (clock.minutes * 60) + clock.seconds;
clock.hour = Math.floor(mins /60 / 60);
clock.minutes =  Math.floor(mins / 60) - (clock.hour * 60);
clock.seconds = mins % 60;
console.log(clock);

// Створи об'єкт, що описує звичайний дріб
let frac = {
    firstFrac: {
        up: 6,
        dw: 31,
    },
    secondFrac: {
        up: 5,
        dw: 9,
    },
    resultFrak:{
            mult: 0,
            division: 0,
            subtraction: 0,
            addition: 0,
    }
}
let nodBotom = 0;
function gcd(n, m) {
    return m == 0 ? n : gcd(m, n % m);
  }
  function nok(n, m) {
    nodBotom = n * m / gcd(n, m);
  }
    
nok(frac.firstFrac.dw, frac.secondFrac.dw)

frac.resultFrak.mult = frac.firstFrac.up * frac.secondFrac.up + "/" + frac.firstFrac.dw * frac.secondFrac.dw;
frac.resultFrak.division = frac.firstFrac.dw * frac.secondFrac.up + "/" + frac.firstFrac.up * frac.secondFrac.dw;
frac.resultFrak.subtraction = ((nodBotom / frac.firstFrac.dw ) * frac.firstFrac.up) - ((nodBotom / frac.secondFrac.dw) * frac.secondFrac.up) + "/" + nodBotom;
frac.resultFrak.addition = ((nodBotom / frac.firstFrac.dw ) * frac.firstFrac.up) + ((nodBotom / frac.secondFrac.dw) * frac.secondFrac.up) + "/" + nodBotom;
console.log(frac.resultFrak.mult);
console.log(frac.resultFrak.division);
console.log(frac.resultFrak.subtraction);
console.log(frac.resultFrak.addition)



