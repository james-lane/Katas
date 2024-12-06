import {
  createMatrix,
  getHorizontals,
  getReversedHorizontals,
  getVerticals,
  getReversedVerticals,
  getDiagonalsToBottomLeft,
  getDiagonalsToBottomRight,
  getDiagonalsToTopRight,
  getDiagonalsToTopLeft,
} from './matrix'

const strMatrix = `ABC
DEF
GHI`

const matrix = [
  ['A', 'B', 'C'],
  ['D', 'E', 'F'],
  ['G', 'H', 'I'],
]

describe('createMatrix', () => {
  it('should create a matrix from multiline string', () => {
    expect(createMatrix(strMatrix)).toEqual([
      ['A', 'B', 'C'],
      ['D', 'E', 'F'],
      ['G', 'H', 'I'],
    ])
  })
})

describe('getHorizontals', () => {
  it('should return horizontal values', () => {
    expect(getHorizontals(matrix)).toEqual([
      ['A', 'B', 'C'],
      ['D', 'E', 'F'],
      ['G', 'H', 'I'],
    ])
  })
})

describe('getReversedHorizontals', () => {
  it('should return reversed horizontal values', () => {
    expect(getReversedHorizontals(matrix)).toEqual([
      ['C', 'B', 'A'],
      ['F', 'E', 'D'],
      ['I', 'H', 'G'],
    ])
  })
})

describe('getVerticals', () => {
  it('should return vertical values', () => {
    expect(getVerticals(matrix)).toEqual([
      ['A', 'D', 'G'],
      ['B', 'E', 'H'],
      ['C', 'F', 'I'],
    ])
  })
})

describe('getReversedVerticals', () => {
  it('should return reversed vertical values', () => {
    expect(getReversedVerticals(matrix)).toEqual([
      ['G', 'D', 'A'],
      ['H', 'E', 'B'],
      ['I', 'F', 'C'],
    ])
  })
})

describe('getDiagonals', () => {
  it('should return diagonal values', () => {
    expect(getDiagonalsToTopLeft(matrix.map((arr) => arr.slice()))).toEqual([
      ['G'],
      ['H', 'D'],
      ['I', 'E', 'A'],
      ['F', 'B'],
      ['C'],
    ])
    expect(getDiagonalsToBottomLeft(matrix.map((arr) => arr.slice()))).toEqual([
      ['A'],
      ['B', 'D'],
      ['C', 'E', 'G'],
      ['F', 'H'],
      ['I'],
    ])
    expect(getDiagonalsToTopRight(matrix.map((arr) => arr.slice()))).toEqual([
      ['I'],
      ['H', 'F'],
      ['G', 'E', 'C'],
      ['D', 'B'],
      ['A'],
    ])
    expect(getDiagonalsToBottomRight(matrix.map((arr) => arr.slice()))).toEqual([
      ['C'],
      ['B', 'F'],
      ['A', 'E', 'I'],
      ['D', 'H'],
      ['G'],
    ])
  })
})
