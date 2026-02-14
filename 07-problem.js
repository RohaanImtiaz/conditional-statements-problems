function findGrade(marks) {
  if (marks >= 90)
    return 'A'
  else if (marks >= 80)
    return 'B'
  else if (marks >= 70)
    return 'C'
  else if (marks >= 60)
    return 'D'
  else if (marks >= 50)
    return 'E'
  else
    return 'F'
}

console.log(findGrade(95))
console.log(findGrade(85))
console.log(findGrade(75))
console.log(findGrade(65))
console.log(findGrade(55))
console.log(findGrade(35))
