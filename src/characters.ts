import { ValidCharacter } from './types'
import { sliceGroup, matchAll, replaceCharacter } from './utils'
import { CHAR_WIDTH } from './constants'

/* Exports an array of 'Character' objects generated from easier-to-read templates */

/* prettier-ignore */
const baseChars = [
  // 0
  ' _ ' + 
  '| |' +
  '|_|',
  // 1
  '   ' + 
  '  |' + 
  '  |',
  // 2
  ' _ ' +
  ' _|' +
  '|_ ',
  // 3
  ' _ ' +
  ' _|' +
  ' _|',
  // 4
  '   ' +
  '|_|' +
  '  |',
  // 5
  ' _ ' +
  '|_ ' +
  ' _|',
  // 6
  ' _ ' +
  '|_ ' +
  '|_|',
  // 7
  ' _ ' +
  '  |' +
  '  |',
  // 8
  ' _ ' +
  '|_|' +
  '|_|',
  // 9
  ' _ ' +
  '|_|' +
  ' _|',
]

/* Takes a char string (one of the above) and generates
 * any possible ambiguous matches in the case of the scanner
 * not picking up a pipe or an underscore */

const pipeOrUnderscore = /[_|]/g

export const getAmbiguousMatches = (charString: string): string[] => {
  const matches = matchAll(charString, pipeOrUnderscore).map((match) => {
    const { offset } = match
    return replaceCharacter(charString, ' ', offset)
  })
  return matches
}

/* pretty-print characters by their serialized string */
export const stringToDisplay = (charString: string): string =>
  sliceGroup(CHAR_WIDTH, charString.split(''))
    .map((line) => line.join(''))
    .join('\n')

/* Initialize each character */
export const characters: ValidCharacter[] = baseChars.map((char, index) => {
  /* Split each line into individual chars, then flatten into single array */
  const display = stringToDisplay(char)

  return {
    display,
    digit: index,
    serialized: char,
    ambMatches: getAmbiguousMatches(char),
  }
})

export const ILLEGIBLE = {
  digit: '?',
}
