export const part1 = (startFloor: number, instructions: string): number => {
  const instructionArray = instructions.split('')

  let currentFloor = startFloor
  for (const instruction of instructionArray) {
    if (instruction === '(') {
      currentFloor++
    }

    if (instruction === ')') {
      currentFloor--
    }
  }

  return currentFloor
}

export const part2 = (instructions: string): number | undefined => {
  const instructionArray = instructions.split('')
  let currentFloor = 0
  for (let index = 1; index <= instructionArray.length; index++) {
    if (instructionArray[index - 1] === '(') {
      currentFloor++
    }

    if (instructionArray[index - 1] === ')') {
      currentFloor--
    }

    if (currentFloor === -1) return index
  }
}
