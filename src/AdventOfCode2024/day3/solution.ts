export const part1 = (input: string) => {
  const realInstructions = input.match(/mul\(\d+,\d+\)/g)

  if (!realInstructions) return 0

  const multipliedNumbers: number[] = []

  realInstructions.forEach((instruction) => {
    const numbersToMultiply = instruction.match(/\d+/g)

    if (!numbersToMultiply) return 0

    multipliedNumbers.push(parseInt(numbersToMultiply[0]) * parseInt(numbersToMultiply[1]))
  })

  return multipliedNumbers.reduce((a, b) => a + b, 0)
}

export const part2 = (input: string) => {
  const allInstructions = input.match(/(mul\(\d+,\d+\))|(don\'t\(\))|(do\(\))/g)

  let real = true
  const realInstructions: string[] = []

  allInstructions?.forEach((instruction) => {
    if (instruction === "don't()") {
      real = false
      return
    }

    if (instruction === 'do()') {
      real = true
      return
    }

    if (!real) return

    realInstructions.push(instruction)
  })

  if (!realInstructions) return 0

  const multipliedNumbers: number[] = []

  realInstructions.forEach((instruction) => {
    const numbersToMultiply = instruction.match(/\d+/g)

    if (!numbersToMultiply) return 0

    multipliedNumbers.push(parseInt(numbersToMultiply[0]) * parseInt(numbersToMultiply[1]))
  })

  return multipliedNumbers.reduce((a, b) => a + b, 0)
}
