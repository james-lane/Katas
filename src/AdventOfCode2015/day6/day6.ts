export const part1 = (input: string) => {}

export enum Instruction {
  turnOn = 'turn on',
  toggle = 'toggle',
  turnOff = 'turn off',
}

export interface Light {
  x: number
  y: number
  state: number
}

export const toCoordinates = (coordinateString: string) => {
  const coordinates = coordinateString.split(',')

  return { x: parseInt(coordinates[0]), y: parseInt(coordinates[1]) }
}

export const applyInstruction = (instruction: Instruction, state: number): number => {
  switch (instruction) {
    case Instruction.turnOn:
      return 1
    case Instruction.turnOff:
      return 0
    default:
      return state === 0 ? 1 : 0
  }
}

export const countLit = (lights: Light[]): number => {
  return lights.filter((light) => light.state === 1).length
}
