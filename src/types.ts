import { ILLEGIBLE } from './characters'

export type Maybe<T> = T | void

/* A single row of characters in a scan, split into an array.
 * Should always be 27 characters
 **/
export type ScanLine = string[]

/**
 * Character
 *
 * An object containing information about characters 0-9
 **/

interface ScanChar {
  display: string
  serialized: string
}

export interface ValidCharacter extends ScanChar {
  /* The digit this OCR represents */
  digit: number
  /* Possible ambiguous matches */
  ambMatches: string[]
}

export type Character = ValidCharacter | typeof ILLEGIBLE

/**
 * LineResult
 *
 * An object containing the matched Characters,
 * A printable string,
 * and any flags ['ERR', 'ILL']
 */

export interface LineResult {
  characters: Character[]
  accountString: string
  flag: string
  ambiguous: string[]
}
