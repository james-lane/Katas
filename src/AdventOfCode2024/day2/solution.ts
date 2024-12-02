export const part1 = (input: string) => {
  const reports: string[] = input.split('\n')

  const safeReports: string[] = []
  const unsafeReports: string[] = []

  reports.forEach((report) => {
    reportSafety(report) === 'safe' ? safeReports.push(report) : unsafeReports.push(report)
  })

  return safeReports.length
}

export const part2 = (input: string) => {
  const reports: string[] = input.split('\n')

  const safeReports: string[] = []
  const unsafeReports: string[] = []

  reports.forEach((report) => {
    reportSafety(report, true) === 'safe' ? safeReports.push(report) : unsafeReports.push(report)
  })

  return safeReports.length
}

export const reportSafety = (report: string, usePart2: boolean = false) => {
  let safe = true
  const reportItems = report.split(' ').map((item) => parseInt(item))

  safe = checkSafety(reportItems)

  if (!safe && usePart2) {
    reportItems.forEach((_, index) => {
      const reportToCheck = Array.from(reportItems)
      reportToCheck.splice(index, 1)
      if (checkSafety(reportToCheck)) safe = true
    })
  }

  return safe ? 'safe' : 'unsafe'
}

const checkSafety = (reportItems: number[]) => {
  let safe = true
  if (reportItems.some((item, index) => Math.abs(item - reportItems[index + 1]) > 3)) safe = false

  if (reportItems.toReversed().some((item, index) => Math.abs(item - reportItems.toReversed()[index + 1]) > 3))
    safe = false

  if (reportItems.some((item, index) => item === reportItems[index + 1])) safe = false

  const firstInReport = Array.from(reportItems).shift()
  const lastInReport = Array.from(reportItems).pop()

  if (firstInReport! === lastInReport!) safe = false

  if (firstInReport! > lastInReport!) {
    if (
      reportItems
        .toSorted((a, b) => b - a)
        .toReversed()
        .toString() !== reportItems.toReversed().toString()
    )
      safe = false
  }

  if (firstInReport! < lastInReport!) {
    if (reportItems.toSorted((a, b) => a - b).toString() !== reportItems.toString()) safe = false
  }

  return safe
}
