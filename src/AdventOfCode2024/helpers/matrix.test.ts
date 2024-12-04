import { getHorizontals, getReverseHorizontals, getVerticals, getReversedVerticals } from './matrix'

const matrix = [
  ['A', 'B', 'C'],
  ['D', 'E', 'F'],
  ['G', 'H', 'I'],
]

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
    expect(getReverseHorizontals(matrix)).toEqual([
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
