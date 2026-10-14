/*
  Homework 3 — Sum of even numbers

  Add up all EVEN numbers from 1 to 50.
  Print: "Sum of even numbers from 1 to 50 is 650"

  Check: change limit to 10 — the answer should be 30 (2 + 4 + 6 + 8 + 10).
*/

let limit = 50;

// your code here
let sum =0;
for(let i =0;i<=limit;i++){
  if(i%2==0){
   sum=sum+i;
  }
}
console.log(`Sum of even numbers from 1 to 50 is ${sum}`)