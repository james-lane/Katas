import { createMatrix } from '../helpers/matrix'

export const part1 = (input: string) => {
  let map = createMatrix(input)

  do {
    map = moveGuard(map)
  } while (getCurrentGuard(map).coords.length > 0)

  return map.flat().filter((element) => element === 'X').length
}

const getCurrentGuard = (map: any[][]) => {
  let coords: number[] = []
  let symbol: string = ''

  map.forEach((row, i) => {
    row.forEach((element, j) => {
      if (element === '^' || element === '>' || element === 'v' || element === '<') {
        coords = [i, j]
        symbol = element
      }
    })
  })

  return { coords, symbol }
}

const moveGuard = (initMap: any[][]): string[][] => {
  const guard = getCurrentGuard(initMap)
  const currentCoords = guard.coords
  let map = initMap
  let coords: number[] = []
  let guardSymbol: string = guard.symbol

  if (!guard.coords.length) return map

  if (guardIsOutOfBounds(guard, map)) {
    map[currentCoords[0]].splice(currentCoords[1], 1, 'X')
  } else {
    map.forEach((row) => {
      row.forEach((element) => {
        switch (element) {
          case '^':
            if (map[currentCoords[0] - 1][currentCoords[1]] === '#') {
              coords = [currentCoords[0], currentCoords[1] + 1]
              guardSymbol = '>'
            } else {
              coords = [currentCoords[0] - 1, currentCoords[1]]
              guardSymbol = '^'
            }
            break
          case '>':
            if (map[currentCoords[0]][currentCoords[1] + 1] === '#') {
              coords = [currentCoords[0] + 1, currentCoords[1]]
              guardSymbol = 'v'
            } else {
              coords = [currentCoords[0], currentCoords[1] + 1]
              guardSymbol = '>'
            }
            break
          case 'v':
            if (map[currentCoords[0] + 1][currentCoords[1]] === '#') {
              coords = [currentCoords[0], currentCoords[1] - 1]
              guardSymbol = '<'
            } else {
              coords = [currentCoords[0] + 1, currentCoords[1]]
              guardSymbol = 'v'
            }
            break
          case '<':
            if (map[currentCoords[0]][currentCoords[1] - 1] === '#') {
              coords = [currentCoords[0] - 1, currentCoords[1]]
              guardSymbol = '^'
            } else {
              coords = [currentCoords[0], currentCoords[1] - 1]
              guardSymbol = '<'
            }
            break
          default:
            break
        }
      })
    })

    map[coords[0]].splice(coords[1], 1, guardSymbol)

    map[currentCoords[0]].splice(currentCoords[1], 1, 'X')
  }

  return map
}

const guardIsOutOfBounds = (guard: { coords: number[]; symbol: string }, map: any[][]) => {
  return (
    (guard.symbol === 'v' && guard.coords[0] === map.length - 1) ||
    (guard.symbol === '>' && guard.coords[1] === map[0].length - 1) ||
    (guard.symbol === '^' && guard.coords[0] === 0) ||
    (guard.symbol === '<' && guard.coords[1] === 0)
  )
}
