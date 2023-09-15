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
  let count = 0

  inputArray.forEach((word) => {
    const goodResult = containsMoreThanOnePair(word) && containsOneLetterBetween(word)

    if (goodResult) {
      count++
    }
  })

  return count
}

export const containsMoreThanOnePair = (input: string) => {
  const inputArray = input.split('')

  const pairs: string[] = []

  for (let i = 0; i < inputArray.length; i++) {
    if (!inputArray[i + 1]) continue
    const pair = inputArray[i] + inputArray[i + 1]
    pairs.push(pair)
  }

  for (const pair of pairs) {
    const filtered = pairs.filter((letters) => letters === pair)

    if (filtered.length > 1 && !isOverlap(input, pair)) {
      return true
    }
  }

  return false
}

export const isOverlap = (input: string, existingPair: string) => {
  const chars = existingPair.split('')

  if (chars[0] !== chars[1]) return false

  return input.includes(chars[0] + chars[0] + chars[0]) && !input.includes(chars[0] + chars[0] + chars[0] + chars[0])
}

export const containsOneLetterBetween = (input: string) => {
  const inputArray = input.split('')

  const triples: string[] = []

  for (let i = 0; i < inputArray.length; i++) {
    if (!inputArray[i + 1] || !inputArray[i + 2]) continue
    const triple = inputArray[i] + inputArray[i + 1] + inputArray[i + 2]
    triples.push(triple)
  }

  for (const triple of triples) {
    if (hasOneLetterBetween(triple)) return true
  }

  return false
}

export const hasOneLetterBetween = (triple: string) => {
  const chars = triple.split('')

  if (chars[0] === chars[2]) return true

  return false
}
