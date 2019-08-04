import { Character } from './types'
import { parseScan } from './parseScan'
import { parseLine } from './parseLine'
// import { checkSum } from './checkSum'
//

/**
 * Takes an array of parsed characters and returns a
 * printable result
 */

const printLine = (line: Character[]): string => {
  return line.map((l) => l.digit).join('')
}

/* Takes a scanned document,
 * parses it,
 * and prints out the results */

export const read = (scan: string) => {
  const results = parseScan(scan)
    .map(parseLine)
    .map(printLine)
  return results
}
