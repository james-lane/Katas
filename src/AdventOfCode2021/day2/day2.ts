export const part1 = (input: string) => {
  const inputArray = input.split(/\r?\n/).map((e) => e.trim())

  const instructions = inputArray.map((instruction) => {
    const instructionObj = instruction.split(' ')
    return {
      movement: instructionObj[0],
      amount: parseInt(instructionObj[1]),
    }
  })

  let horizontalPosition = 0
  let verticalPosition = 0

  instructions.forEach((instruction) => {
    switch (instruction.movement) {
      case 'forward':
        horizontalPosition = horizontalPosition + instruction.amount
        break
      case 'down':
        verticalPosition = verticalPosition + instruction.amount
        break
      case 'up':
        verticalPosition = verticalPosition - instruction.amount
        break
      default:
        break
    }
  })

  return horizontalPosition * verticalPosition
}
