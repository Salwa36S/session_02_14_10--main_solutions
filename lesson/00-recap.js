/*
  Task 0 — Warm-up (Session 1 recap)

  An item costs 3 OMR. You buy 4 items.

  1. Calculate the total and print: "Total: 12 OMR"
  2. If the total is 10 OMR or more → print "Free delivery!"
     Otherwise                      → print "Delivery: 1 OMR"

  Test with quantity 4 and quantity 2.
*/

const price = 3;
let quantity = 4;
// your code here
let total = price * quantity;
console.log(`Total: ${total} OMR`)
if(total >=10)
  console.log(`Free delivery!`)
else
  console.log('Delivery: 1 OMR')
