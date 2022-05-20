import md5 from 'md5'

export const part1 = (input: string) => {
    let number = 0
    let hash = md5(`${input}${number}`)

    do {
        number++
        hash = md5(`${input}${number}`)
    } while (
        !hash.startsWith('00000')
        )

    return number
}

export const part2 = (input: string) => {
    let number = 0
    let hash = md5(`${input}${number}`)

    do {
        number++
        hash = md5(`${input}${number}`)
    } while (
        !hash.startsWith('000000')
        )

    return number
}