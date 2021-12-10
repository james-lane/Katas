export const part1 = (numbers: string) => {
  const numbersArray = numbers.split(/\r?\n/).map((e) => e.trim())
  let amountOfIncreases = 0
  numbersArray.forEach((currentNumber, index, numbers) => {
    const previousNumber = numbers[index - 1]

    if (currentNumber > previousNumber) {
      amountOfIncreases++
    }
  })

  return amountOfIncreases
}

export const part2 = (numbers: string) => {
  const numbersArray = numbers.split(/\r?\n/).map((e) => e.trim())
  let amountOfIncreases = 0
  numbersArray.forEach((currentNumber, index, numbers) => {
    const previousNumber = numbers[index - 1]

    const currentArrayTotal = parseInt(currentNumber) + parseInt(numbers[index + 1]) + parseInt(numbers[index + 2])
    const previousArrayTotal = parseInt(numbers[index - 1]) + parseInt(numbers[index]) + parseInt(numbers[index + 1])

    if (currentArrayTotal > previousArrayTotal) {
      amountOfIncreases++
    }
  })

  return amountOfIncreases
}
