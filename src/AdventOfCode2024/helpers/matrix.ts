export const createMatrix = (input: string) => {
  return input.split('\n').map((row) => row.split(''))
}

export const getHorizontals = (input: any[][]) => {
  return input.map((row) => row)
}

export const getReversedHorizontals = (input: any[][]) => {
  return input.map((row) => row.toReversed())
}

export const getVerticals = (input: any[][]) => {
  const verticals: any[] = []

  let matrixWidth = 0
  input.forEach((row) => {
    if (row.length > matrixWidth) {
      matrixWidth = row.length
    }
  })

  for (let i = 0; i < matrixWidth; i++) {
    const vertical: any[] = []

    input.forEach((row) => {
      if (row[i]) {
        vertical.push(row[i])
      }
    })

    verticals.push(vertical)
  }

  return verticals
}

export const getReversedVerticals = (input: any[][]) => {
  const verticals: any[] = []
  let matrixWidth = 0

  input.forEach((row) => {
    if (row.length > matrixWidth) {
      matrixWidth = row.length
    }
  })

  for (let i = 0; i < matrixWidth; i++) {
    const vertical: any[] = []

    input.forEach((row) => {
      if (row[i]) {
        vertical.push(row[i])
      }
    })

    verticals.push(vertical.toReversed())
  }

  return verticals
}

export const getDiagonalsToBottomLeft = (input: any[][]) => {
  const diagonals: any[] = []
  let maxRow = 0

  do {
    const diagonal: any[] = []
    input.forEach((row, i) => {
      if (i <= maxRow) {
        const elementToPush = row.shift()
        elementToPush && diagonal.push(elementToPush)
      }

      if (i === input.length - 1) {
        maxRow++
      }
    })

    diagonals.push(diagonal)
  } while (input.some((row) => row.length > 0))

  return diagonals
}

export const getDiagonalsToBottomRight = (input: any[][]) => {
  const diagonals: any[] = []
  let maxRow = 0

  do {
    const diagonal: any[] = []
    input.forEach((row, i) => {
      if (i <= maxRow) {
        const elementToPush = row.pop()
        elementToPush && diagonal.push(elementToPush)
      }

      if (i === input.length - 1) {
        maxRow++
      }
    })

    diagonals.push(diagonal)
  } while (input.some((row) => row.length > 0))

  return diagonals
}

export const getDiagonalsToTopLeft = (input: any[][]) => {
  const diagonals: any[] = []
  let maxRow = 0

  do {
    const diagonal: any[] = []
    input.toReversed().forEach((row, i) => {
      if (i <= maxRow) {
        const elementToPush = row.shift()
        elementToPush && diagonal.push(elementToPush)
      }

      if (i === input.length - 1) {
        maxRow++
      }
    })

    diagonals.push(diagonal)
  } while (input.some((row) => row.length > 0))

  return diagonals
}

export const getDiagonalsToTopRight = (input: any[][]) => {
  const diagonals: any[] = []
  let maxRow = 0

  do {
    const diagonal: any[] = []
    input.toReversed().forEach((row, i) => {
      if (i <= maxRow) {
        const elementToPush = row.pop()
        elementToPush && diagonal.push(elementToPush)
      }

      if (i === input.length - 1) {
        maxRow++
      }
    })

    diagonals.push(diagonal)
  } while (input.some((row) => row.length > 0))

  return diagonals
}
