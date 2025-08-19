// MATH OBJECT
// Math
// Constant PI

console.log(Math.PI);

// different math methods
// pow, min, max, round, ceil, trunc, random

// power -
console.log(Math.pow(3, 2)); //exponetial
console.log(Math.min(23, 4, 2, -98)); //minimum number of a set
console.log(Math.max(-23, -4, -2, -98)); //maximum number of a set

// round, ceil (up), floor (down), trunc(removes)
console.log(Math.round(7.55)); // normal rounding off nums
console.log(Math.ceil(91.2)); // round UP
console.log(Math.floor(9.99)); // round DOWN
console.log(Math.trunc(10.23)); // removes the decimal point

// random -> randmom pseudo numbers between 0 - 1
console.log(Math.random());
// 0-10
console.log(Math.trunc(Math.random() * 11));

// 1-20
console.log(Math.random() * 20) + 1;
const randomNumber = Math.floor(Math.random() * 20) + 1;

// 0-5
const customers = ["Ola", "Blessing", "Pius", "Moshood", "Season", "Samuel"];

// pick a random lucky winner
const randomLuckyNumber = Math.floor(Math.random() *customers.length);
console.log(customers[randomLuckyNumber]);

// 5-10
// 10-20
// 20-50
// 0-5
// 10-20

const min = 5;
const max = 23;

const rNum = Math.floor(Math.random() * (max - min +1)) + min; //formula 
console.log(rNum);


