/*
  Homework 8 — Exam results

  The pass mark is 60.

  1. Print every score with "passed" or "failed":
     "75 — passed"
     "48 — failed"
     ...
  2. At the end print:
     "Passed: 4, Failed: 2"
*/

const scores = [75, 48, 90, 60, 55, 82];

// your code here
let pass = 0
let failed=0
for(let i =0;i< scores.length;i++){
   if(scores[i]>=60){
     console.log(`${scores[i]} — passed`)
     pass++
   }else{
     console.log(`${scores[i]} — failed`)
     failed++
   }
}
console.log(`Passed: ${pass} , Failed:${failed}`)