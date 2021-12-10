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
