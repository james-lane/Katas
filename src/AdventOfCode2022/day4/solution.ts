const convertToNumbers = (area: string) => {
  const areaArr = area.split('-')
  return [parseInt(areaArr[0]), parseInt(areaArr[1])]
}

export const containsTheOther = (pairs: string[]) => {
  const numberPairs: number[][] = []

  pairs.forEach((area) => numberPairs.push(convertToNumbers(area)))

  if (numberPairs[0][0] > numberPairs[1][0] && numberPairs[0][1] > numberPairs[1][1]) return false
  if (numberPairs[0][0] < numberPairs[1][0] && numberPairs[0][1] < numberPairs[1][1]) return false

  return true
}

export const part1 = (input: string) => {
  const pairsArr = input.split('\n')
  let pairs: string[][] = []
  let count = 0

  pairsArr.forEach((pair) => pairs.push(pair.split(',')))

  pairs.forEach((pair) => {
    if (containsTheOther(pair)) count += 1
  })

  return count
}
