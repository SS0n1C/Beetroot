// function name(){}
// let name = function(){}
// let name = (name1, name2) => name1 / name2;
// function name (name3){
//     let name4 = 6;
//     return name3 / name4;
// }

function argumentNumber (){
    alert(arguments.length);
}
argumentNumber (2, 3, 4, 5 )

function Numbs (a, b){
    if (a < b) {
        return -1;
    }
    if (a > b){
        return 1;
    }
    if ( a == b){
        return 0;
    }
}
alert(Numbs(1, 2))

function factorial(n) {
    let result = 1;
    if (n > 1) {
        for (let i = 1; i <= n; i++) {
            result = result * i;
        }
        return result;
    }
    else {
        return "wrong number";
    }
}
alert(factorial(3));


function threeNumber(a, b, c){
    a = [a];
    b = [b];
    c = [c];
    return a + b + c;
}
alert(threeNumber(20, 18, 17))


function name9 (width, height ){
    if(height > 0){
        return width * height;
    }   else {
        return width ** arguments.length;
    } 
}
alert(name9(10,"  "));

function perfectNum(number){
let temp = 0;
   for(let i = 1;i <= number / 2; i++){
     if(number % i === 0){
            temp += i;
        }
     }
     if(temp === number && temp !== 0){
       console.log("It is a perfect number");
        } else {
       console.log("It is not a perfect number");
        }   
    }
perfectNum(28);

function perNumb (min, max){
let number;
for (i = min; i <=max; i++ ){
    number = i;
    let temp = 0;
    for(let j = 1; j <= number / 2; j++){
             if(number % j == 0){
                }
             }
             if(temp == number && temp !== 0){
               console.log(`${number} "It is a perfect number"`);
                } else {
               console.log(`${number} "It is not a perfect number"`);
                }   
            }
}
perNumb(4,30);

let abc = {
    
}

