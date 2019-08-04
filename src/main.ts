import { Character, LineResult } from './types'
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
  const flags = [valid ? null : 'ERR'].filter(Boolean)

  return {
    characters,
    accountString,
    flags,
    ambiguous: [],
  }
}

/* Takes a LineResult and returns a printable line */
const printLine = ({ accountString, flags }: LineResult): string => {
  const flagString = flags.join(' ')
  return `${accountString} ${flagString}`.trim()
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
