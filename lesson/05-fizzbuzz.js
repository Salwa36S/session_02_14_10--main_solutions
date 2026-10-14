/*
  Task 5 — FizzBuzz

  Print the numbers from 1 to 15, but:
  - divisible by 3 AND by 5 → print "FizzBuzz"
  - divisible by 3          → print "Fizz"
  - divisible by 5          → print "Buzz"
  - otherwise               → print the number

  Expected (one per line):
  1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz

  Hint: which check must come first? Think about 15.
*/
for(i=1;i<=15;i++){
  if(i%3==0 && i%5==0){
    console.log(`FizzBuzz`)
  }else if(i%3==0){
    console.log(`Fizz`)
  }else if(i%5==0){
    console.log(`Buzz`)
  }
else{
console.log(`${i}`)
}
}

// your code here
