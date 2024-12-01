export const part1 = (input: string) => {
  const inputRows: string[] = input.split('\n')

  const list1: string[] = []
  const list2: string[] = []

  const differences: number[] = []

  inputRows.forEach((row) => {
    const rowItems = row.split(' ')

    list1.push(rowItems.shift()!)
    list2.push(rowItems.pop()!)
  })

  list1.sort()
  list2.sort()

  list1.forEach((element, index) => {
    const difference = Math.abs(parseInt(element) - parseInt(list2[index]))
    differences.push(difference)
  })

  return differences.reduce((a, b) => a + b, 0)
}

export const part2 = (input: string) => {
  const inputRows: string[] = input.split('\n')

  const list1: string[] = []
  const list2: string[] = []

  inputRows.forEach((row) => {
    const rowItems = row.split(' ')

    list1.push(rowItems.shift()!)
    list2.push(rowItems.pop()!)
  })

  const similarityScores: number[] = []

  list1.forEach((element) => {
    const multiplier = list2.filter((e) => e === element).length
    const similarityScore = parseInt(element) * multiplier

    similarityScores.push(similarityScore)
  })

  return similarityScores.reduce((a, b) => a + b, 0)
}
