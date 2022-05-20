import { part1, part2 } from './day4'

const puzzleInput = `iwrupvqb`


describe('day 4 part 1', () => {
  it('should return 609043 when given a secret of abcdef', () => {
    expect(part1('abcdef')).toEqual(609043)
  })

  it('should return 1048970 when given a secret of pqrstuv', () => {
    expect(part1('pqrstuv')).toEqual(1048970)
  })

  it(`should return answer when given a secret of ${puzzleInput}`, () => {
    expect(part1(puzzleInput)).toEqual(346386)
  })
})

describe('day 4 part 2', () => {
  it(`should return answer when given a secret of ${puzzleInput}`, () => {
    expect(part2(puzzleInput)).toEqual(9958218)
  })
})
