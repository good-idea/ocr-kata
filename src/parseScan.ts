import { sliceGroup } from './utils'
import { SCAN_LINE_HEIGHT } from './constants'
/**
 *  Take an initial OCR scan and separate it out into lines
 *
 * Each entry is 4 lines long, and each line has 27 characters.
 * The first 3 lines of each entry contain an account number written
 * using pipes and underscores, and the fourth line is blank. Each
 * account number should have 9 digits, all of which should be in the
 * range 0-9. A normal file contains around 500 entries.
 */

type ScanLine = string[]
type ScanChar = string[]

export const parseScan = (scan: string): ScanLine[] => {
  const allRows = scan.split(/\n/)
  const lines = sliceGroup(SCAN_LINE_HEIGHT, allRows)
  return lines.filter((line) => line.length === SCAN_LINE_HEIGHT)
}
