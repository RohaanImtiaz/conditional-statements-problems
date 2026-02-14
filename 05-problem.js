function checkDivisibility(num) {
  if (num <= 0)
    return

  if ((num % 5 === 0) && (num % 11 === 0))
    return `${num} is divisible by 5 and 11`
  else
    return `${num} is NOT divisible by 5 and 11`
}

console.log(checkDivisibility(5))
console.log(checkDivisibility(10))
console.log(checkDivisibility(55))
console.log(checkDivisibility(0))
console.log(checkDivisibility(-1))
