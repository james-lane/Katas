type Procedure = {
  amount: number
  fromIndex: number
  toIndex: number
}

export const allocationToArray = (input: string) => {
  let crateAllocation: string | string[] = input

  // Neater columns
  crateAllocation = crateAllocation.replace(/(...)./g, '$1|')
  crateAllocation = crateAllocation.split('\n')
  crateAllocation.pop() // Remove crateAllocationRow

  const allocationArray = []

  for (let index = 0; index < crateAllocation.length; index++) {
    allocationArray.push(crateAllocation[index].split(/\|/g))
  }

  return allocationArray
}

export const formatProcedure = (input: string): Procedure[] => {
  const inputArray = input.split('\n')

  return inputArray.map((instruction) => {
    const instructionNumbers = instruction.match(/\d+/g)

    return {
      amount: parseInt(instructionNumbers![0]),
      fromIndex: parseInt(instructionNumbers![1]) - 1,
      toIndex: parseInt(instructionNumbers![2]) - 1,
    }
  })
}

export const transposeCrateAllocation = (input: string[][]): string[][] => {
  input.reverse()

  const transposedAllocation = new Array()

  input.forEach((allocation) => {
    allocation.forEach((e, i) => {
      if (Array.isArray(transposedAllocation[i])) {
        e !== '   ' && transposedAllocation[i].push(e)
      } else {
        transposedAllocation.push([])
        e !== '   ' && transposedAllocation[i].push(e)
      }
    })
  })

  return transposedAllocation
}

export const applyInstruction = (crateAllocation: string[][], prodedure: Procedure, reverse: boolean) => {
  let crates = crateAllocation
  const cratesToMove = crates[prodedure.fromIndex].splice(-prodedure.amount, prodedure.amount)

  reverse ? crates[prodedure.toIndex].push(...cratesToMove.reverse()) : crates[prodedure.toIndex].push(...cratesToMove)

  return crates
}

export const generateMessage = (crates: string[][], procedure: Procedure[], reverse: boolean = true) => {
  let newCrateAllocation = crates

  procedure.forEach((procedure) => {
    newCrateAllocation = applyInstruction(newCrateAllocation, procedure, reverse)
  })

  let message: string[] = []

  newCrateAllocation.forEach((crates) => {
    const topCrate = crates.pop()
    topCrate && message.push(topCrate)
  })

  return message.toString().replace(/\[|\]|\,/g, '')
}

export const part1 = (input: string) => {
  const allocationAndProcedure = input.split('\n\n')

  const crateAllocation = allocationToArray(allocationAndProcedure[0])
  const crateProcedure = formatProcedure(allocationAndProcedure[1])

  const transposedCrateAllocation = transposeCrateAllocation(crateAllocation)

  return generateMessage(transposedCrateAllocation, crateProcedure)
}

export const part2 = (input: string) => {
  const allocationAndProcedure = input.split('\n\n')

  const crateAllocation = allocationToArray(allocationAndProcedure[0])
  const crateProcedure = formatProcedure(allocationAndProcedure[1])

  const transposedCrateAllocation = transposeCrateAllocation(crateAllocation)

  return generateMessage(transposedCrateAllocation, crateProcedure, false)
}
