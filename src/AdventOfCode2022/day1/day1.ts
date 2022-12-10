export const part1 = (input: string) => {
  const elfCaloriesSplit = input.split('\n\n')

  const elfCaloryTotals = elfCaloriesSplit.map((e, i) => {
    return {
      id: i + 1,
      calories: e.split('\n').reduce((a, b) => a + parseInt(b), 0),
    }
  })

  const sortedElfCaloryTotals = elfCaloryTotals.sort((a, b) => b.calories - a.calories)

  return sortedElfCaloryTotals[0]
}

export const part2 = (input: string) => {
  const elfCaloriesSplit = input.split('\n\n')

  const elfCaloryTotals = elfCaloriesSplit.map((e, i) => {
    return {
      id: i + 1,
      calories: e.split('\n').reduce((a, b) => a + parseInt(b), 0),
    }
  })

  const sortedElfCaloryTotals = elfCaloryTotals.sort((a, b) => b.calories - a.calories)

  return sortedElfCaloryTotals[0].calories + sortedElfCaloryTotals[1].calories + sortedElfCaloryTotals[2].calories
}
