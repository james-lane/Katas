export const getHorizontals = (input: any[][]) => {
  return input.map((row) => row)
}

export const getReverseHorizontals = (input: any[][]) => {
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
