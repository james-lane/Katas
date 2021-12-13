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
        //this can be written like:
        horizontalPosition += instruction.amount
        break
      case 'down':
        verticalPosition += instruction.amount
        break
      case 'up':
        verticalPosition -= instruction.amount
        break
      default:
        break
    }
  })

  return horizontalPosition * verticalPosition
}

export const part2 = (input: string) => {
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
  let aim = 0

  instructions.forEach((instruction) => {
    switch (instruction.movement) {
      case 'forward':
        horizontalPosition = horizontalPosition + instruction.amount
        verticalPosition = verticalPosition + aim * instruction.amount
        break
      case 'down':
        aim += instruction.amount
        break
      case 'up':
        aim -= instruction.amount
        break
      default:
        break
    }

    console.log({
      instruction,
      horizontalPosition,
      verticalPosition,
      aim,
    })
  })

  return horizontalPosition * verticalPosition
}
