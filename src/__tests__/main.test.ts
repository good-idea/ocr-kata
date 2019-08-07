import { read } from '../main'
import { useCase1, invalid, illegible } from './sampleScans'

describe('read', () => {
  it('should return an array of parsed results', async () => {
    const scanResults = read(useCase1)
    expect(scanResults[0]).toContain('000000000')
    expect(scanResults[1]).toContain('111111111')
    expect(scanResults[2]).toContain('222222222')
    expect(scanResults[3]).toContain('333333333')
    expect(scanResults[4]).toContain('444444444')
    expect(scanResults[5]).toContain('555555555')
    expect(scanResults[6]).toContain('666666666')
    expect(scanResults[7]).toContain('777777777')
    expect(scanResults[8]).toContain('888888888')
    expect(scanResults[9]).toContain('999999999')
    expect(scanResults[10]).toContain('123456789')
  })

  it('should append "ERR" to numbers that fail the checksum', () => {
    const scanResults = read(invalid)
    scanResults.forEach((result) => {
      expect(result).toMatch(/[\d\?]{9} ERR/)
    })
  })

  it('should append "ILL" to numbers that do not have a match', () => {
    const scanResults = read(illegible)
    scanResults.forEach((result) => {
      expect(result).toMatch(/[\d\?]{9} ILL/)
    })
  })
})
