// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

function divisors(integer) {
    let numbers = [2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] === integer) {
        let intIndex = numbers.indexOf(integer);
        numbers.splice(intIndex, 1);
      }
      if (integer % numbers[i] !== 0) {
        numbers.splice(i, 1);
      }
      return numbers;
    }
  };