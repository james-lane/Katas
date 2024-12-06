import {
  getDiagonalsToBottomLeft,
  getDiagonalsToBottomRight,
  getDiagonalsToTopLeft,
  getDiagonalsToTopRight,
  getHorizontals,
  getReversedHorizontals,
  getVerticals,
  getReversedVerticals,
  createMatrix,
} from '../helpers/matrix'

export const part1 = (input: string) => {
  const matrix = createMatrix(input)

  const allMatrixes = []

  allMatrixes.push(getHorizontals(matrix.map((arr) => arr.slice())).map((row) => row.join('')))
  allMatrixes.push(getReversedHorizontals(matrix.map((arr) => arr.slice())).map((row) => row.join('')))
  allMatrixes.push(getVerticals(matrix.map((arr) => arr.slice())).map((row) => row.join('')))
  allMatrixes.push(getReversedVerticals(matrix.map((arr) => arr.slice())).map((row) => row.join('')))
  allMatrixes.push(getDiagonalsToBottomLeft(matrix.map((arr) => arr.slice())).map((row) => row.join('')))
  allMatrixes.push(getDiagonalsToBottomRight(matrix.map((arr) => arr.slice())).map((row) => row.join('')))
  allMatrixes.push(getDiagonalsToTopLeft(matrix.map((arr) => arr.slice())).map((row) => row.join('')))
  allMatrixes.push(getDiagonalsToTopRight(matrix.map((arr) => arr.slice())).map((row) => row.join('')))

  let count = 0

  allMatrixes.flat().forEach((str) => {
    count += str.match(/XMAS/g)?.length || 0
  })

  return count
}

export const part2 = (input: string) => {
  const matrix = createMatrix(input)

  const allMatrixes = []

  allMatrixes.push(getDiagonalsToBottomLeft(matrix.map((arr) => arr.slice())).map((row) => row.join('')))
  allMatrixes.push(getDiagonalsToBottomRight(matrix.map((arr) => arr.slice())).map((row) => row.join('')))
  allMatrixes.push(getDiagonalsToTopLeft(matrix.map((arr) => arr.slice())).map((row) => row.join('')))
  allMatrixes.push(getDiagonalsToTopRight(matrix.map((arr) => arr.slice())).map((row) => row.join('')))

  let count = 0

  allMatrixes.flat().forEach((str) => {
    count += str.match(/MAS/g)?.length || 0
  })

  return count
}
