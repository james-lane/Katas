import fs from 'fs'

export function readFile(filePath: string) {
  try {
    const data = fs.readFileSync(filePath)
    return data.toString()
  } catch (error: any) {
    console.error(`Got an error trying to read the file: ${error.message}`)
    return ''
  }
}
