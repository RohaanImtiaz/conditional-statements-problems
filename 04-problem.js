function isLeapYear(year) {
  if (year <= 0)
    return

  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0))
    return `${year} is a Leap Year`
  else
    return `${year} is NOT a Leap Year`
}

console.log(isLeapYear(2026))
console.log(isLeapYear(2020))
console.log(isLeapYear(2000))
console.log(isLeapYear(1900))
console.log(isLeapYear(0))
console.log(isLeapYear(-1))