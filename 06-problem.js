function checkVowelConsonant(char) {
  char = char.toLowerCase()
  const vowels = ['a', 'e', 'i', 'o', 'u']
  return vowels.includes(char) ? 'vowel' : 'consonant'
}

console.log(checkVowelConsonant('A'))
console.log(checkVowelConsonant('B'))
console.log(checkVowelConsonant('e'))
