/*
  Homework 7 — Count big numbers

  Count how many numbers are greater than limit and print:
  "3 numbers are greater than 10"

  Careful: is 10 itself greater than 10?
  Then change limit to 5 — the answer should be 6.
*/

const numbers = [4, 15, 8, 23, 10, 42, 7];
let limit = 10;

// your code here
let count = 0;
for(let i =0; i < numbers.length;i++){
  if(numbers[i] > limit){
    count++;
  }
}
console.log(`${count} numbers are greater than ${limit}`)