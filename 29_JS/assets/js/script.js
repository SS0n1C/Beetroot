 //MINIMUM

let age = prompt("What is your age?", " ");

if (age<=0){
    alert("Wrong")
}
if (age >0  && age <= 11){
    alert("You are child");
}
if (age >= 12  && age <= 17){
    alert("You are teenager");
}
if (age >=18 && age <=59){
    alert("You are adult");
} 
if (age >= 60){
    alert("You are old");
}
 


let symbolNumber = prompt("Give your number", "")

switch (symbolNumber){
    case "1":
        alert("!");
        break;
    case "2":
        alert("@");
        break;
    case "3":
        alert("#");
        break;
    case "4":
        alert("$");
        break;
    case "5":
        alert("%");
        break;
    case "6":
        alert("^");
        break;
    case "7":
        alert("&");
        break;
    case "8":
        alert("*");
        break;
    case "9":
        alert("(");
        break;
    case "0":
        alert(")");
        break;
    default:
        alert("Wrong number")
} 

let minNumber = parseInt(prompt("Add number", ""));
let maxNumber = parseInt(prompt("Add another number", ""));
let finalNumber = 0;
while(minNumber <= maxNumber){       
    minNumber++;
    finalNumber+=minNumber;  
 }

alert(finalNumber); 


const firstNumber = prompt('Enter a first positive number:',"");
const secondNumber = prompt('Enter a second positive number:',"")
let result;

for (let i = 1; i <= firstNumber && i <= secondNumber; i++) {
if( firstNumber % i == 0 && secondNumber % i == 0) {
    result = i;
    }
}
alert(`greatest common divisor ${firstNumber} and ${secondNumber} is ${result}.`);



let a$ = prompt("Enter your number","")
    for (i = 1;i <= a$; i++){
        if (a$ % i==0)
        console.log(i+ " ");
} 
 
//NORMAL

 let number = prompt("Add you number", "");
let number2 = number;
let zero = 0;
let rever;
while(number > 0){
  rever = number % 10;
  zero = zero * 10;
  zero += rever;
  number = Math.floor(number/10);
}
if(+zero == number2){
    alert("so it's a palindromes.")
} else{
    alert("so, its not palindromes.")
} 

let cash$ = prompt("Haw many $ you want spend?","")
if(cash$ < 200){
    alert ("you dont have discount");
}
if(cash$ >= 200 && cash$ < 300){
    alert(`Your price is ${(cash$ - (cash$ * 3 / 100)).toFixed(2)}`);
}
if(cash$ >= 300 && cash$ < 500){
    alert(`Your price is ${(cash$ - (cash$ * 5 / 100)).toFixed(2)}`);
}
if(cash$ >= 500){
    alert(`Your price is ${(cash$ - (cash$ * 7 / 100)).toFixed(2)}`);
}
    let tenNums = prompt("add ten nums", " ");
    if (+tenNums >0){
        console.log(+tenNums.length);
    } else{
        console.log("sory");
    }

 

    var a = ["a", "b", "c"];
var index;
for (index = 0; index < a.length; ++index) {
    console.log(a[index]);
}
    

10,-15,0,20,0,-2,69,-33,0,-1

while(true){
let Monday = confirm("Today is Monday.You want see next day?");
if (Monday == false){
    let Tuesday = confirm("Today is Tuesday.You want see next day?");
    if (Tuesday == false){
        let Wednesday = confirm("Today is Wednesday.You want see next day?");
        if (Wednesday == false){
            let Thursday = confirm("Today is Thursday.You want see next day?");
            if( Thursday == false){
                let Friday= confirm("Today is Friday.You want see next day?");
                if (Friday == false){
                    let Saturday = confirm("Today is Saturday.You want see next day?");
                    if (Saturday == false ){
                        let Sunday= confirm("Today is Sunday.You want see next day?");
                        if (Sunday == true){
                            break;
                        }
                    }else{
                        break;
                    }
                } else{
                    break;
                }
            } else{
                break;
            }
        } else{
            break;
        }
    } else{
        break;
    }
}   else{
    break;
}   
}               

Hard

for (i = 2; i <= 9; i++ ){
    for(k = 1; k <= 10; k++){
        tableNumber = i * k;
        document.write(tableNumber);
    }
    document.write("<br>");
}

var d = new Date(prompt ('add date',''));
d.setDate(d.getDate() +1);
alert(d);

let arr = [...Array(100)].map((_, ind) => ind + 1)
while(true){
  let ask = prompt(`Заданное число большое или меньше, чем ${arr[Math.floor(arr.length / 2) - 1]} ?`)
  if(!ask) break
  if(ask == 'Оно' || ask == 'оно'){
    alert(`Загаданное число - ${arr[Math.floor(arr.length / 2) - 1]}`)
 
    break
  }
  if(ask == 'Больше' || ask == 'больше'){
    arr = arr.slice(Math.floor(arr.length / 2))
  }
  if(ask == 'Меньше' || ask == 'меньше') {
    arr = arr.slice(0, Math.floor(arr.length / 2))
  }
}
// Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів.
let numbs = prompt("Enter a number:");
result = numbs.split(",");
console.log('result', result);
let positive = " ";
let negative = " ";
let zeroNum = " ";
let pari = " ";
let notPari = " ";
for(index = 0; index < result.length; ++index){
    if(result[index] > 0 ){
        positive += result[index] + ",";
    }
    if(result[index] < 0 ){
        negative += result[index] + ",";
    } 
    if(result[index] == 0 ){
        zeroNum += result[index] + ",";
    }
}
for(index = 0; index < result.length; ++index){
    if (result[index] % 2 == 0) {
        pari += result[index] + ",";
}
    if (result[index] % 2 !== 0) {
        notPari += result[index] + ",";
}
}
console.log(`${pari} - Its your even numbers`);
console.log(`${notPari} - Its your not even numbers`);
console.log(`${positive} - Its your positive number`);
console.log(`${negative} - Its your negative number`);
console.log(`${zeroNum} - Its your zero`);


// Гра «Вгадай число»
let max = 100;
let min = 1;
let N = 50; 
let answer = false;
alert("To guess number from 1 to 100");

do{
    answer = confirm(`your number is ${N}`)
    smaller = confirm(`You number less ${N}`)
    if (smaller){
        max = N;
        N = parseInt((min + max) / 2);
    } else{
        min = N;
        N = parseInt((min + max) / 2);
    }
}while(!answer){
    alert("Victory")
}

