export const part1 = (input: string) => {
  const inputArray = input.split('').map((e) => e.trim())

  let allDeliveries: string[] = []
  let currentDelivery = [0, 0]

  allDeliveries.push(JSON.stringify(currentDelivery))

  inputArray.forEach((i) => {
    const newCoord = getNewCoord(currentDelivery, i)
    allDeliveries.push(JSON.stringify(newCoord))
    currentDelivery = newCoord
  })

  const uniqueDeliveries: string[] = []

  allDeliveries.forEach((item) => {
    const itemString = JSON.stringify(item)

    if (!uniqueDeliveries.find((i) => i === itemString)) {
      uniqueDeliveries.push(itemString)
    }
  })

  return uniqueDeliveries.length
}

export const part2 = (input: string) => {
  const inputArray = input.split('').map((e) => e.trim())

  const santasInstructions = inputArray.filter((element, index) => {
    return index % 2 === 0
  })

  const robotInstructions = inputArray.filter((element, index) => {
    return index % 2 !== 0
  })

  let allDeliveries: string[] = []
  let santaCurrentDelivery = [0, 0]
  let robotCurrentDelivery = [0, 0]

  allDeliveries.push(JSON.stringify(santaCurrentDelivery))
  allDeliveries.push(JSON.stringify(robotCurrentDelivery))

  santasInstructions.forEach((i) => {
    const newCoord = getNewCoord(santaCurrentDelivery, i)
    allDeliveries.push(JSON.stringify(newCoord))
    santaCurrentDelivery = newCoord
  })

  robotInstructions.forEach((i) => {
    const newCoord = getNewCoord(robotCurrentDelivery, i)
    allDeliveries.push(JSON.stringify(newCoord))
    robotCurrentDelivery = newCoord
  })

  const uniqueDeliveries: string[] = []

  allDeliveries.forEach((item) => {
    const itemString = JSON.stringify(item)

    if (!uniqueDeliveries.find((i) => i === itemString)) {
      uniqueDeliveries.push(itemString)
    }
  })

  return uniqueDeliveries.length
}

export const getNewCoord = (currentCoord: number[], direction: string) => {
  switch (direction) {
    case '^':
      return [currentCoord[0], currentCoord[1] + 1]
    case 'v':
      return [currentCoord[0], currentCoord[1] - 1]
    case '>':
      return [currentCoord[0] + 1, currentCoord[1]]
    default:
      return [currentCoord[0] - 1, currentCoord[1]]
  }
}
