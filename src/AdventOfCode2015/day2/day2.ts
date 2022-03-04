export const smallestArea = (l: number, w: number, h: number) => {
  const sortedNumbers = [l, w, h].sort((a, b) => a - b)
  return sortedNumbers[0] * sortedNumbers[1]
}

export const smallestPerimeter = (l: number, w: number, h: number) => {
  const sortedNumbers = [l, w, h].sort((a, b) => a - b)
  return sortedNumbers[0] * 2 + sortedNumbers[1] * 2
}

export const part1 = (input: string) => {
  const inputArray = input.split(/\r?\n/).map((e) => e.trim())

  let total = 0

  for (const input of inputArray) {
    const dims = input.split('x')

    const l = parseInt(dims[0])
    const w = parseInt(dims[1])
    const h = parseInt(dims[2])

    const extra = smallestArea(l, w, h)

    const area = 2 * l * w + 2 * w * h + 2 * h * l + extra

    total += area
  }

  return total
}

export const part2 = (input: string) => {
  const inputArray = input.split(/\r?\n/).map((e) => e.trim())

  let total = 0

  for (const input of inputArray) {
    const dims = input.split('x')

    const l = parseInt(dims[0])
    const w = parseInt(dims[1])
    const h = parseInt(dims[2])

    const wrap = smallestPerimeter(l, w, h)

    const bow = l * w * h

    total += wrap + bow
  }

  return total
}
