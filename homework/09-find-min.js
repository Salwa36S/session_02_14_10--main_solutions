/*
  Homework 9 — Cheapest price

  The same phone costs different prices in different shops (OMR).
  Find the cheapest price and print:
  "Cheapest: 95 OMR"

  Test it also with:
  [80, 95, 110]   → the cheapest is the FIRST one  → "Cheapest: 80 OMR"
  [120, 95, 60]   → the cheapest is the LAST one   → "Cheapest: 60 OMR"
*/

const prices = [120, 95, 110, 130, 99];

// your code here
let cheapest = prices[0];

for (let i = 1; i < prices.length; i++) {
  if (prices[i] < cheapest) {
    cheapest = prices[i];
  }
}

console.log(`Cheapest: ${cheapest} OMR`);