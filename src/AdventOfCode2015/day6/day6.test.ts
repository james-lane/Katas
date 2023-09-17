import { Instruction, Light, applyInstruction, countLit, toCoordinates } from './day6'

describe('toCoordinates', () => {
  it('should convert coordinates to object', () => {
    expect(toCoordinates('0,0')).toEqual({ x: 0, y: 0 })
    expect(toCoordinates('100,0')).toEqual({ x: 100, y: 0 })
    expect(toCoordinates('0,100')).toEqual({ x: 0, y: 100 })
  })
})

describe('actionInstruction', () => {
  it.each`
    instruction            | state | result
    ${Instruction.turnOn}  | ${0}  | ${1}
    ${Instruction.turnOn}  | ${1}  | ${1}
    ${Instruction.turnOff} | ${0}  | ${0}
    ${Instruction.turnOff} | ${1}  | ${0}
    ${Instruction.toggle}  | ${1}  | ${0}
    ${Instruction.toggle}  | ${0}  | ${1}
  `(
    'should return $result when state is $state and given an instruction of $instruction',
    ({ instruction, state, result }) => {
      expect(applyInstruction(instruction, state)).toEqual(result)
    },
  )
})

describe('countLit', () => {
  it('should return amount of lit lights', () => {
    const lightMatrix: Light[] = [
      { x: 0, y: 0, state: 1 },
      { x: 0, y: 1, state: 1 },
      { x: 1, y: 0, state: 0 },
      { x: 1, y: 1, state: 0 },
    ]

    expect(countLit(lightMatrix)).toEqual(2)
  })
})
