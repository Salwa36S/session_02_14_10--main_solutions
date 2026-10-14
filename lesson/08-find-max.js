/*
  DEMO 8 — Hottest day

  Temperatures in Muscat this week, Sunday → Saturday.

  1. Find the highest temperature and print: "Hottest: 44°C"
  2. Print which day of the week it was: "It was day 4 of the week"

  Idea: remember the biggest number you have seen so far.
  Start with the FIRST temperature, not with 0. Why?
*/

const temps = [38, 41, 39, 44, 40, 42, 37];
let maxNumber=temps[0]
for(let i =0; i < temps.length; i++){
  if(temps[i]> maxNumber){
 maxNumber=temps[i]
  }
}
console.log(`Hottest: ${maxNumber}°C`)
// your code here
