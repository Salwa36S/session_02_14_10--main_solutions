/*
  Homework 12 — Reverse an array

  Create a NEW array called reversed with the same days in the opposite order.
  Print both arrays:
  ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"]
  ["Thursday", "Wednesday", "Tuesday", "Monday", "Sunday"]

  Rule: do NOT use .reverse(). Use a loop and .push().
  Hint: a for loop can count down — start at days.length - 1 and go down to 0.
*/

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];

// your code here
const reversed = [];

for (let i = days.length - 1; i >= 0; i--) {
  reversed.push(days[i]);
}

console.log(days);
console.log(reversed);
