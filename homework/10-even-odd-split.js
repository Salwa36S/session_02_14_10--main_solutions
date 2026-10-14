/*
  Homework 10 — Split even and odd

  Create two NEW empty arrays: evens and odds.
  Go through numbers and .push() each number into the right array.

  Print:
  "Even: 4,10,8,2"   (or the array itself)
  "Odd: 7,13,5"

  Then print which group is bigger: "There are more even numbers"
  (or "There are more odd numbers", or "Same amount")
*/

const numbers = [7, 4, 10, 13, 8, 5, 2];

// your code here
const evens = [];
const odds = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evens.push(numbers[i]);
  } else {
    odds.push(numbers[i]);
  }
}

console.log(`Even: ${evens}`);
console.log(`Odd: ${odds}`);

if (evens.length > odds.length) {
  console.log("There are more even numbers");
} else if (odds.length > evens.length) {
  console.log("There are more odd numbers");
} else {
  console.log("Same amount");
}
