console.log("Hello World"); //String

console.log(56); //numbers

/* Multi Line
Commemts */

let name = "Paul";
let age  = 23;
age = 12;

console.log(name);
console.log(age);

const color = "Red";
//color = "white";
console.log(color)

//basic math
let x = 5;
let y = 10;

console.log(x + y);

let total = 10 + 5 - (3 * 4) / 3
console.log(total);

let a = 1;
a++;
console.log(a);

let sub = 100;
sub--;
sub--;
console.log(sub);

//Decision making
let health = 70;
if (health < 50) {
    console.log("You're dead");
}else if (health > 50) {
    console.log("Good");
}else {
    console.log("Keep going");
}

let yo = 20;
if (yo >= 15 && yo <= 25) {
    console.log("Young adult");
}

let num = 10;
if (num >= 5 || num <= 15) {
    console.log("num is between those 5 and 15");
}

//ternary if
console.log((num >= 8 || num <= 20) ? "true" : "false");

//for loop
for (let num = 0; num <= 10; num+=2) {
    console.log(num);
}

let someNum = 0;
for (let i = 0; i < 3; i++) {
    console.log(someNum+=i);
}

console.log("-------------------");

for (let w = 1; x <=10; w++) {
    if (w == 6) {
        break;
    }
    console.log(w);
}

console.log("-------------------");
//while loop
let q = 1
while (q <= 10) {
    console.log(q);
    q++;
}

let sum=0; 
for(let i=5; i<8; i++) {
  if (i == 6) {
    continue; 
  }
  sum += i;
}
console.log(sum);

//Array
let fruits = ['Apple', 'Orange', 'Mango'];

fruits.push("Peach");

console.log(fruits);

console.log(fruits[1]);

for (let p = 0; p < fruits.length; p++) {
    console.log(fruits[p]);
}

let numbers = [1, 2, 3, 4];
let numTotal = 0;
for (let i = 0; i < numbers.length; i++) {
    numTotal += numbers[i];
}
console.log(numTotal);

//Functions
function greetings() {
    console.log("Wazzup!");
}

greetings();

function Hello (user) {
    console.log("Hello", user);
}

Hello("Pao");

function add (x, y) {
    return x + y;
}

let totalNum = add(1, 2);
console.log(totalNum);

//Alert
//alert("This is an alert");

//Event Handling
window.onload = function() {
    let btn = document.getElementById("myButton");
    btn.onclick = greetings;
    let btn1 = document.getElementById("btn1");
    let btn2 = document.getElementById("btn2");
    let cel = document.getElementById("celsius");
    let fahr = document.getElementById("fahr");
}

btn1.onclick = function() {
    console.log(1 + 2);
}

btn2.onclick = function() {
    fahr.value = (cel.value * 9/5) -32;
}