const alphabet = 'abcdefghijklmnopqrstuvwxyz'

export const priorityCalc = (character: string) => {
  let priority = 0

  if (character.toUpperCase() === character && character.toLowerCase() !== character) priority += 26

  priority += alphabet.indexOf(character.toLowerCase()) + 1

  return priority
}

export const itemInBothComparments = (rucksack: string) => {
  let compartmentA = rucksack.slice(0, rucksack.length / 2).split('')
  let compartmentB = rucksack.slice(rucksack.length / 2).split('')

  return compartmentA.filter((item) => compartmentB.includes(item))[0]
}

export const itemInAllRucksacks = (rucksacks: string[]) => {
  const rucksackItemArray: string[][] = []

  rucksacks.forEach((rucksack) => rucksackItemArray.push(rucksack.split('')))

  return rucksackItemArray[0].filter(
    (item) => rucksackItemArray[1].includes(item) && rucksackItemArray[2].includes(item),
  )[0]
}

const splitIntoGroups = (rucksacks: string[]) => {
  const rucksackGroups = []

  for (let i = 0; i < rucksacks.length; i += 3) {
    const group = rucksacks.slice(i, i + 3)
    rucksackGroups.push(group)
  }

  return rucksackGroups
}

export const part1 = (input: string) => {
  const rucksacks = input.split('\n')
  let rucksackPrioritySum = 0

  rucksacks.forEach((rucksack) => {
    rucksackPrioritySum += priorityCalc(itemInBothComparments(rucksack))
  })

  return rucksackPrioritySum
}

export const part2 = (input: string) => {
  const rucksacks = input.split('\n')
  const rucksackGroups = splitIntoGroups(rucksacks)

  let rucksackPrioritySum = 0

  rucksackGroups.forEach((rucksackGroup) => (rucksackPrioritySum += priorityCalc(itemInAllRucksacks(rucksackGroup))))

  return rucksackPrioritySum
}
