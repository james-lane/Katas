export const part1 = (input: string) => {
  const binaryStringToNumberArray = (input: string) => input.split('').map((bit: string) => parseInt(bit))
  const bitFrequency = (input: number[]) => {
    const zeroCount = input.filter((n) => n === 0)
    const oneCount = input.filter((n) => n === 1)

    return { most: zeroCount.length > oneCount.length ? 0 : 1, least: zeroCount.length > oneCount.length ? 1 : 0 }
  }
  const binaries = input.split(/\r?\n/).map((binary) => binaryStringToNumberArray(binary))

  const binaryLength = binaries[0].length

  const binaryForMostAsArray = []
  const binaryForLeastAsArray = []

  for (let count = 0; count < binaryLength; count++) {
    binaryForMostAsArray.push(bitFrequency(binaries.map((bit) => bit[count])).most)
    binaryForLeastAsArray.push(bitFrequency(binaries.map((bit) => bit[count])).least)
  }

  const gamma = parseInt(binaryForMostAsArray.join('').toString(), 2)
  const epsilon = parseInt(binaryForLeastAsArray.join('').toString(), 2)

  return gamma * epsilon
}
