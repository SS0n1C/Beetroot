let a = 0.1;
let b = 0.2;
console.log( (a + b).toFixed(1) );

let num1 = "1";
let num2 = 2;
console.log(+num1 + num2);


let flesh = prompt("What size of your flash drive", "");
const file = 0.820;
alert(`You can write ${Math.floor(flesh / file)} file`);

let $ = prompt("Haw many $ you have?", "");
let price = prompt("And what a price your chocolate?","");
alert(`Hmm.. you can buy only ${Math.floor($ / price)} I am very sory`);
alert(`But dont sad,beckause you still have ${($ % price).toFixed(2)}`);

let number = prompt("Add you number", "");
let zero = 0;
let rever;
while(number > 0){
  rever = number % 10;
  zero = zero * 10;
  zero += rever;
  number = Math.floor(number/10);
}
alert(+zero);

let deposit = prompt("Haw many cash do you have?","");
let percent = 5 / 6;
alert(`After 2 monts you will have ${(+deposit/100 * percent).toFixed(2)}`);

/*2 && 0 && 3 - Оскільки є нуль, то вираз стає false і поверне 0.
 2 || 0 || 3 - Поверне перший правильний вираз  2.
 2 && 0 || 3 - 2 && 0 - є нуль, тому false. Покаже 3*/



 





