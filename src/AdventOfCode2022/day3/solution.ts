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

export const part1 = (input: string) => {
  const rucksacks = input.split('\n')
  let rucksackPrioritySum = 0

  rucksacks.forEach((rucksack) => {
    rucksackPrioritySum += priorityCalc(itemInBothComparments(rucksack))
  })

  return rucksackPrioritySum
}
