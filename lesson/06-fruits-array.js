/*
  DEMO 6 — Fruits array

  1. Print the whole array.
  2. Print how many fruits there are: "We have 3 fruits"
  3. Print the first fruit:  fruits[0]
  4. Print the last fruit:   fruits[fruits.length - 1]
  5. Add "pomegranate" with .push() and print the length again.
  6. Print every fruit with for...of: "I like dates", "I like mango", ...
  7. Print every fruit with a normal for loop and its number:
     "1. dates", "2. mango", ...
*/

const fruits = ["dates", "mango", "banana"];

// your code here
for(let i=0;i<fruits.length;i++){
  console.log(fruits[i])
}