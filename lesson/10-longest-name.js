/*
  Task 10 — Longest name

  Find the longest name and print:
  "Longest name: Abdullah (8 letters)"

  Hint: strings also have .length — "Sara".length is 4.
  Test: move "Abdullah" to the start of the array. Does it still work?
*/

const names = ["Ahmed", "Sara", "Fatma", "Khalid", "Abdullah"];
let LongestName =names[0]
let index =0
// your code here
for(let i =0;i<names.length;i++){
if(names[i].length>LongestName.length){
  LongestName=names[i]
  index=i
}
}
console.log(`${LongestName} is Longest name `)
console.log(` the index of longest name is ${index}`)