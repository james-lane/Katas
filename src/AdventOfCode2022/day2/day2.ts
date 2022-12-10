export const part1 = (input: string) => {
  const strategyGuide = input.split('\n')

  const A = 1,
    B = 2,
    C = 3,
    X = 1,
    Y = 2,
    Z = 3,
    win = 6,
    draw = 3,
    loss = 0

  const roundScore = (round: string) => {
    const moves = round.split(' ')

    if (moves[0] === 'A' && moves[1] === 'X') return X + draw
    if (moves[0] === 'B' && moves[1] === 'X') return X + loss
    if (moves[0] === 'C' && moves[1] === 'X') return X + win
    if (moves[0] === 'A' && moves[1] === 'Y') return Y + win
    if (moves[0] === 'B' && moves[1] === 'Y') return Y + draw
    if (moves[0] === 'C' && moves[1] === 'Y') return Y + loss
    if (moves[0] === 'A' && moves[1] === 'Z') return Z + loss
    if (moves[0] === 'B' && moves[1] === 'Z') return Z + win
    if (moves[0] === 'C' && moves[1] === 'Z') return Z + draw

    return 0
  }

  let score = 0

  strategyGuide.forEach((round) => (score = score + roundScore(round)))

  return score
}

export const part2 = (input: string) => {
  const strategyGuide = input.split('\n')

  const A = 1,
    B = 2,
    C = 3,
    rock = 1,
    paper = 2,
    scissors = 3,
    win = 6,
    draw = 3,
    loss = 0

  const roundScore = (round: string) => {
    const moves = round.split(' ')

    if (moves[0] === 'A' && moves[1] === 'X') return scissors + loss
    if (moves[0] === 'B' && moves[1] === 'X') return rock + loss
    if (moves[0] === 'C' && moves[1] === 'X') return paper + loss
    if (moves[0] === 'A' && moves[1] === 'Y') return rock + draw
    if (moves[0] === 'B' && moves[1] === 'Y') return paper + draw
    if (moves[0] === 'C' && moves[1] === 'Y') return scissors + draw
    if (moves[0] === 'A' && moves[1] === 'Z') return paper + win
    if (moves[0] === 'B' && moves[1] === 'Z') return scissors + win
    if (moves[0] === 'C' && moves[1] === 'Z') return rock + win

    return 0
  }

  let score = 0

  strategyGuide.forEach((round) => (score = score + roundScore(round)))

  return score
}
