/*
  DEMO 3 — Sum from 1 to 100

  Add up all the numbers from 1 to 100: 1 + 2 + 3 + ... + 100
  Print: "Sum of 1 to 100 is 5050"

  Then change n to 10 — the answer should be 55.

  Hint: create let sum = 0 BEFORE the loop,
        then add each number inside the loop: sum += i
*/

let n = 100;
 let sum =0;
// your code here
for(let i =1;i<=n;i++){
  sum = sum+i;
 
}
 console.log(sum)