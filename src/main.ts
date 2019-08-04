import { Character, LineResult } from './types'
import { ILLEGIBLE } from './characters'
import { parseScan } from './parseScan'
import { parseLine } from './parseLine'
import { checksum } from './checksum'

/**
 * Takes an array of parsed Characters and returns a
 * LineResult
 */

const checkLine = (characters: Character[]): LineResult => {
  const accountString = characters.map((c) => c.digit).join('')
  const valid = checksum(accountString)
  const illegible = characters.find((c) => c === ILLEGIBLE)
  const flag = illegible ? 'ILL' : !valid ? 'ERR' : null
  const flags = [valid ? null : 'ERR'].filter(Boolean)

  return {
    characters,
    accountString,
    flag,
    ambiguous: [],
  }
}

/* Takes a LineResult and returns a printable line */
const printLine = ({ accountString, flag }: LineResult): string => {
  return [accountString, flag].filter(Boolean).join(' ')
}

/* Takes a scanned document,
 * parses it,
 * and prints out the results */

export const read = (scan: string) => {
  const results = parseScan(scan)
    .map(parseLine)
    .map(checkLine)
    .map(printLine)
  return results
}
