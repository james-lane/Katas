export const part1 = (input: string) => {
  const pageOrderingRules = input
    .split('\n\n')[0]
    .split('\n')
    .map((rule) => rule.split('|'))
  const pagesToProduce = input
    .split('\n\n')[1]
    .split('\n')
    .map((rule) => rule.split(','))

  const validPageGroups: any[] = []

  pagesToProduce.forEach((pages) => {
    let valid = true

    pages.forEach((page, pageIndex) => {
      const before = pages.slice(0, pageIndex)

      pageOrderingRules.filter((rule) => rule[0] === page)

      pageOrderingRules.forEach((rule) => {
        if (page === rule[0] && before.includes(rule[1])) {
          valid = false
        }
      })
    })

    if (valid) validPageGroups.push(pages)
    valid = true
  })

  const medianValues: number[] = []
  validPageGroups.forEach((group) => medianValues.push(parseInt(group[Math.floor(group.length / 2)])))

  return medianValues.reduce((a, b) => a + b, 0)
}

export const part2 = (input: string) => {
  const pageOrderingRules = input
    .split('\n\n')[0]
    .split('\n')
    .map((rule) => rule.split('|'))
  const pagesToProduce = input
    .split('\n\n')[1]
    .split('\n')
    .map((rule) => rule.split(','))

  const fixedPageGroups: any[] = []
  let invalidPageGroups: any[] = []

  pagesToProduce.forEach((pages) => {
    const valid = isValid(pageOrderingRules, pages)

    !valid && invalidPageGroups.push(pages)
  })

  invalidPageGroups.forEach((invalidPageGroup) => {
    const fixed = fixPageOrder(pageOrderingRules, invalidPageGroup)
    fixedPageGroups.push(fixed)
  })

  const medianValues: number[] = []
  fixedPageGroups.forEach((group) => medianValues.push(parseInt(group[Math.floor(group.length / 2)])))

  return medianValues.reduce((a, b) => a + b, 0)
}

export const isValid = (rules: string[][], pagesToProduce: string[]) => {
  let valid = true

  pagesToProduce.forEach((page, pageIndex) => {
    const before = pagesToProduce.slice(0, pageIndex)

    rules.filter((rule) => rule[0] === page)

    rules.forEach((rule) => {
      if (page === rule[0] && before.includes(rule[1])) {
        valid = false
      }
    })
  })

  return valid
}

const fixPageOrder = (rules: string[][], pages: string[]) => {
  rules.filter((rule) => pages.includes(rule[0]) && pages.includes(rule[1]))

  do {
    rules.forEach((rule) => {
      const indexOfRule1 = pages.indexOf(rule[0])
      const indexOfRule2 = pages.indexOf(rule[1])

      if (indexOfRule1 !== -1 && indexOfRule2 !== -1 && indexOfRule1 > indexOfRule2) {
        const removedPage = pages.splice(indexOfRule1, 1)
        pages.splice(indexOfRule2, 0, removedPage[0])
      }
    })
  } while (!isValid(rules, pages))

  return pages
}
