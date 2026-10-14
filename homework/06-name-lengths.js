/*
  Homework 6 — Name lengths

  1. Print every name with its number and length:
     "1. Ahmed (5 letters)"
     "2. Sara (4 letters)"
     ...
  2. Count the names that have MORE than 4 letters and print:
     "4 names have more than 4 letters"

  Hint: "Sara".length is 4.
*/

const names = ["Ahmed", "Sara", "Fatma", "Ali", "Khalid", "Maryam"];

// your code here
let count =0;
let NameMoreLett = names[0]
for(let i = 0;i<names.length;i++){
   console.log(`${i+1}. ${names[i]} (${names[i].length} letters)`)
   if(names[i].length>4){
      count++
   }
}
console.log(`${count} names have more than 4 letters`)