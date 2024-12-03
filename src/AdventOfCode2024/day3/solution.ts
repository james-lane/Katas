import fs from 'fs'

function readFile(filePath: string) {
  try {
    const data = fs.readFileSync(filePath)
    return data.toString()
  } catch (error: any) {
    console.error(`Got an error trying to read the file: ${error.message}`)
  }
}

export const part1 = ({ useReal }: { useReal: boolean }) => {
  const exampleInput = `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`
  const realInput = readFile('./src/AdventOfCode2024/day3/input.txt')

  const input = useReal ? realInput : exampleInput

  if (!input) throw Error('no input.')

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

export const part2 = ({ useReal }: { useReal: boolean }) => {
  const exampleInput = `xmul(2,4)&mul[3,7]!^don't()\_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))`
  const realInput = readFile('./src/AdventOfCode2024/day3/input.txt')

  const input = useReal ? realInput : exampleInput

  if (!input) throw Error('no input.')

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
