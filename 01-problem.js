function checkEvenOdd(num) {
  if (num < 0)
    return;
  else if (num % 2 === 0)
    return `${num} is Even`
  else
    return `${num} is Odd`
}

console.log(checkEvenOdd(0))
console.log(checkEvenOdd(1))
console.log(checkEvenOdd(2))
console.log(checkEvenOdd(-1))