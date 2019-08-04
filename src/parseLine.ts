import { ScanLine, Character, Maybe } from './types'
import { characters, stringToDisplay } from './characters'
import { sliceGroup } from './utils'
import { ACCT_CHAR_LENGTH, SCAN_LINE_HEIGHT, CHAR_WIDTH, SCAN_LINE_LENGTH } from './constants'

/**
 * Match a serialized string of characters to a result
 */

const parseCharacter = (charString: string): Character => {
  const match = characters.find((c) => c.serialized === charString)
  if (!match) throw new Error(`No match for scanned character: ${stringToDisplay(charString)}`)
  return match
}

export const parseLine = (rows: ScanLine): Maybe<Character>[] => {
  /* Fail fast with some validation errors */
  if (rows.length !== SCAN_LINE_HEIGHT)
    throw new Error(`Each scanned line must have 4 rows of characters. Received: ${rows.length}`)
  rows.forEach((row) => {
    if (row.length !== SCAN_LINE_LENGTH)
      throw new Error(`Each row of within a line must have 27 characters. Received: ${row.length}`)
  })

  const chars = rows
    /* split each row into an array of single chars, i.e:
     *  [' ', ' ', '_', ' ', ...etc] 4 rows x 27 characters
     **/
    .map((row) => row.split(''))

    /* Group each row into tuples of 3. Each tuple
     * is a horizontal segment of the OCR character, i.e:
     *   [
     *     [' ', ' ', '_'], // top line of char 0
     *     [' ', '_', ' '], // top line of char 1
     *     ...etc
     *   ] 4 rows x (9 groups of 3 characters)
     * */
    .map((rowArr) => sliceGroup(CHAR_WIDTH, rowArr))

    /**
     * We now have 4 'groupedRows' in the array, each containing
     * an array of 9 character segments.
     *  groupedRows[0] = top character segments
     *  groupedRows[1] = middle character segments
     *  groupedRows[2] = bottom character segments
     *  groupedRows[3] = (empty, "new line")
     *
     * In the end, we want a new array with 9 characters.
     */
    .reduce(
      (acc, groupedRow) =>
        /* For each character segment in this row,
         * concatenate it with other segments in the same position.
         *
         * Character 1 is made up of: [
         *    ...groupedRow[0][0]
         *    ...groupedRow[1][0]
         *    ...groupedRow[2][0]
         *    ...groupedRow[3][0]
         * ]
         *
         * Character 2 is: [
         *    ...groupedRow[0][1]
         *    ...groupedRow[1][1]
         *    ...groupedRow[2][1]
         *    ...groupedRow[3][1]
         * ]
         *
         * ..etc
         */
        groupedRow.map((charSegment, index) => [
          ...acc[index], // Previous values

          ...charSegment, // the
        ]),
      /* Initialize the reducer with an array of 9 empty strings:
       * Each of these will become a a serialized string of characters*/
      Array(ACCT_CHAR_LENGTH).fill([]),
    )
    /* Finally, parse each character based on the serialized string */
    .map((charArray) => {
      /* Trim off the last "row" , which is an empty "new line" */
      const trimmed = charArray.slice(0, charArray.length - CHAR_WIDTH)
      /* Finally, serialize it and pass it to parseCharacter */
      return parseCharacter(trimmed.join(''))
    })

  return chars
}
