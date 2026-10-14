/*
  Homework 5 — Shopping list

  prices[0] is the price of items[0], prices[1] is the price of items[1], and so on.

  1. Print every item with its price:
     "bread — 0.5 OMR"
     "milk — 1.5 OMR"
     "eggs — 2 OMR"
     "dates — 3 OMR"
  2. Print the total: "Total: 7 OMR"
  3. Use .push() to add "water" to items and 0.5 to prices
     (right after the arrays) and run again. The total should be 7.5 OMR.

  Hint: use a normal for loop with an index i, so you can read items[i] and prices[i].
*/

const items = ["bread", "milk", "eggs", "dates"];
const prices = [0.5, 1.5, 2, 3];

// your code here
items.push("water");
prices.push(0.5);
let total =0;
for(let i=0;i<items.length;i++){
   console.log(`${items[i]} — ${prices[i]} OMR`)
   total+=prices[i]
}
console.log(`Total: ${total} OMR`)