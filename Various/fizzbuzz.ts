function fizzBuzz(n: number): void {
  for (let num = 1; num <= n; num++) {
    if (num % 3 === 0 && num % 5 === 0) {
      console.log("FizzBuzz");
      continue;
    }
    if (num % 5 === 0) {
      console.log("Buzz");
      continue;
    }
    if (num % 3 === 0) {
      console.log("Fizz");
      continue;
    }
    console.log(num);
  }
}

fizzBuzz(15);
