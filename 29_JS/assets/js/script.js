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
// 3 Завдання я не встиг зробити
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

//Hard
// Перше завдання я не встиг зробити

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


