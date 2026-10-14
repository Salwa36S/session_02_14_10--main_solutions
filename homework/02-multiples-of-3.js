/*
  Homework 2 — Multiples of 3

  1. Print all multiples of 3 from 3 to 30:
     3, 6, 9, ... 30 (one per line)
  2. Count them and print: "There are 10 multiples of 3"

  Then change max to 15 — the answer should be 5.
*/

let max = 30;

// your code here
let count =0;
for(let i=3;i<=max;i++){
  if(i%3==0){
  console.log(i);
  count++;
}
}
console.log(`There are ${count} multiples of 3`)
