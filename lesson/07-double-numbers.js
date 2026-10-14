/*
  Task 7 — Double the numbers

  1. Print each number doubled:
     "3 × 2 = 6"
     "7 × 2 = 14"
     ...
  2. Create a NEW empty array: const doubled = [];
     Use .push() to put every doubled number into it.
     Print it — you should see: [6, 14, 20, 50, 8]
*/

const numbers = [3, 7, 10, 25, 4];
let newarr =[]
// your code here
//1)for loop with index; set index<number.length;
//console.log(`$numbers[index]} x 2 = , numbers[index] * 2`)
for(let index = 0; index< numbers.length;index++ ){
   console.log(`${numbers[index]} x 2 = `, numbers[index] * 2)
   newarr.push(newarr[index])
}
