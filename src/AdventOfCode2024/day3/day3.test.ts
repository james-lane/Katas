import { readFile } from '../helpers/readFile'
import { part1, part2 } from './solution'

const part1ExampleInput = `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`
const part2ExampleInput = `xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))`
const realInput = readFile('./src/AdventOfCode2024/day3/input.txt')

describe('part1', () => {
  it('should pass example test', () => {
    const res = part1(part1ExampleInput)

    expect(res).toEqual(161)
  })

  it('should return expected result for puzzle input', () => {
    const res = part1(realInput)

    expect(res).toEqual(166630675)
  })
})

describe('part2', () => {
  it('should pass example test', () => {
    const res = part2(part2ExampleInput)

    expect(res).toEqual(48)
  })

  it('should return expected result for puzzle input', () => {
    const res = part2(realInput)

    expect(res).toEqual(93465710)
  })
})
