//LOOPS - iterations
// iterations
// loop must terminate
// for, while, do-while loop
// LOOPS - are used to perform repitive tasks

// infinite LOOP

//FOR LOOP
// for(initializer; condition; increment(terminate)){
// action * 6
//}
//0 1 2 3 4 5

for (let i = 0; i < 5; i++) {
  console.log(" in a loop");
}

// 1
for (let attempt = 0; attempt < 3; attempt++) {
  console.log("keep trying");
}

// sum of natural numbers between 0 and 100

let sum = 0;

for (let i = 0; i <= 100; i++) {
  sum += i;
}

console.log(sum);

//WHILE LOOP

let y = 0;
while (y < 3) {
  // action
  console.log("attempt card");

  y++;
}

// Do while loop
// *it perfomrs an action at least once whether the condition is true or false

let x = 5;
do {
  console.log("Hello User");
  x++;
} while (x < 2);

// rolling a dice until 6 appears

let roll;
do {
    roll = Math.floor(Math.random() * 6) +1;
    console.log(`You rolled ${roll}`);
    
} while (roll !== 6);