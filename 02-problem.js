function checkPositiveNegativeZero(num) {
  if (num < 0)
    return `${num} is negative`
  else if (num === 0)
    return `${num} is zero`
  else if (num > 0)
    return `${num} is positive`
}

console.log(checkPositiveNegativeZero(0))
console.log(checkPositiveNegativeZero(1))
console.log(checkPositiveNegativeZero(2))
console.log(checkPositiveNegativeZero(-1))