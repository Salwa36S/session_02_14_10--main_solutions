/*
  Task 9 — Count and average

  Quiz scores of the group (out of 25).

  1. Count how many students got 15 or more.
     Print: "3 students got 15 or more"
  2. Calculate the average score.
     Print: "Average: 15"

  Hint: average = sum ÷ how many (scores.length)
*/

const scores = [12, 18, 9, 21, 15];
let average =0;
let amountgetScores =0;
let total =0;
// your code here
for(let i=0;i<scores.length;i++){
 if(scores[i]>=15){
   amountgetScores=amountgetScores++;
 }
 total=total+scores[i]
}
console.log(`${amountgetScores} students got 15 or more`)
console.log(` Average: `+total/scores.length)