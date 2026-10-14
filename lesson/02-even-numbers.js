/*
  Task 2 — Even numbers

  Print all even numbers from 2 to 20 (one per line).
  Do it in TWO different ways:

  Way 1: start at 2 and go up by 2 each time (i += 2)
  Way 2: go through 1 to 20 and print a number only if it is even (use %)

  Both ways print: 2 4 6 8 10 12 14 16 18 20
*/

// your code here
for(let count=2;count<=20;count+=2){
console.log(count)
}
for(let count=1;count<=20;count++){
  if(count%2==0){
console.log(count)
}
  }
