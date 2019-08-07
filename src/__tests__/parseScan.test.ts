import { readFileSync } from 'fs'
import { resolve } from 'path'
import { parseScan } from '../parseScan'

/* Scan 1 has 11 account numbers, and an extra trailing line at the end (which should be trimmed) */
import { useCase1 } from './sampleScans'

describe('parseScan', () => {
  it('should parse a scanned document into individual "lines" (each line: an array with 4 entries, each with 27 characters)', async () => {
    const scanLines = parseScan(useCase1)
    expect(scanLines.length).toBe(11)
    scanLines.forEach((scanLine) => {
      expect(scanLine.length).toBe(4)
      scanLine.forEach((characterRow) => {
        expect(characterRow.length).toBe(27)
      })
    })
  })
})
