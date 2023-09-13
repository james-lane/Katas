export const part1 = (input: string) => {
  const inputArray = input.split(/\r?\n/).map((e) => e.trim())
  let count = 0

  inputArray.forEach((word) => {
    if (isSafeString(word) && containAtLeastThreeVowels(word) && appearsTwice(word)) {
      count++
    }
  })

  return count
}

export const containAtLeastThreeVowels = (input: string) => {
  const inputAsArray = input.split('')
  const vowels = ['a', 'e', 'i', 'o', 'u']
  let vowelCount = 0

  inputAsArray.forEach((char) => {
    if (vowels.includes(char)) vowelCount++
  })

  return vowelCount >= 3
}

export const appearsTwice = (input: string) => {
  const inputAsArray = input.split('')
  let prevChar = ''
  let result = false

  inputAsArray.forEach((currentChar) => {
    if (currentChar === prevChar) {
      result = true
      return
    }

    prevChar = currentChar
  })

  return result
}

export const isSafeString = (input: string) => {
  return input.search(/ab|cd|pq|xy/g) === -1
}

export const part2 = (input: string) => {
  const inputArray = input.split(/\r?\n/).map((e) => e.trim())
  let niceStringAmount = 0

  inputArray.forEach((input) => {
    const inputAsArray = input.split('')
    let currentPair
    let matchesFound: string[][] = []

    inputAsArray.forEach((char, i) => {
      currentPair = `${inputAsArray[i]}${inputAsArray[i + 1]}`
      const regexp = new RegExp(currentPair, 'g')
      const matches = Array.from(input.matchAll(regexp), (m) => m[0])
      if (matches.length > 1) matchesFound.push(matches)
    })
    console.log(matchesFound)
  })

  return niceStringAmount
}
