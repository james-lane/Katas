import { part1, part2 } from './solution'

describe('part1', () => {
  it('should pass example test', () => {
    const res = part1({ useReal: false })

    expect(res).toEqual(161)
  })

  it('should return expected result for puzzle input', () => {
    const res = part1({ useReal: true })

    expect(res).toEqual(166630675)
  })
})

describe('part2', () => {
  it('should pass example test', () => {
    const res = part2({ useReal: false })

    expect(res).toEqual(48)
  })

  it('should return expected result for puzzle input', () => {
    const res = part2({ useReal: true })

    expect(res).toEqual(93465710)
  })
})
