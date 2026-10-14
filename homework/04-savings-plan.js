/*
  Homework 4 — Savings plan

  Khalid saves money every week: 2 OMR in week 1, 4 OMR in week 2,
  6 OMR in week 3 — every week 2 OMR more than the week before.

  Print every week and the total saved so far:
  "Week 1: saved 2 OMR, total 2 OMR"
  "Week 2: saved 4 OMR, total 6 OMR"
  "Week 3: saved 6 OMR, total 12 OMR"
  ...
  "Week 10: saved 20 OMR, total 110 OMR"
*/

let weeks = 10;
// your code here
let total =0;
let saved =0;
for(let i =1;i<=10;i++){
  console.log(`Week ${i}: saved ${saved+2} OMR, total ${total=i*2} OMR`)
}