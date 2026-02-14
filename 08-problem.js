function isPrime(num) {
  if (num <= 1)
    return `${num} is NOT Prime`;

  for (let i = 2; i <= Math.sqrt(num); i++)
    if (num % i === 0)
      return `${num} is NOT Prime`

  return `${num} is Prime`
}

console.log(isPrime(17))
console.log(isPrime(18))
console.log(isPrime(2))
