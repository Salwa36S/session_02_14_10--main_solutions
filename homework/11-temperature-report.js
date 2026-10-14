/*
  Homework 11 — Temperature report

  Temperatures in Muscat this week, Sunday → Saturday.
  Print a full report:

  "Hottest: 44°C"
  "Coldest: 36°C"
  "Difference: 8°C"
  "Average: 40°C"
  "Days above 40°C: 3"

  Tip: you can do it all in ONE loop, or use several loops — both are fine.
*/

const temps = [36, 41, 39, 44, 40, 42, 38];

// your code here
let hottest = temps[0];
let coldest = temps[0];
let total = 0;
let daysAbove40 = 0;

for (let i = 0; i < temps.length; i++) {
  if (temps[i] > hottest) {
    hottest = temps[i];
  }

  if (temps[i] < coldest) {
    coldest = temps[i];
  }

  total += temps[i];

  if (temps[i] > 40) {
    daysAbove40++;
  }
}

let difference = hottest - coldest;
let average = total / temps.length;

console.log(`Hottest: ${hottest}°C`);
console.log(`Coldest: ${coldest}°C`);
console.log(`Difference: ${difference}°C`);
console.log(`Average: ${average}°C`);
console.log(`Days above 40°C: ${daysAbove40}`);
