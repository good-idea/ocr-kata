import { readFileSync } from 'fs'
import { resolve } from 'path'
import { read } from '../main'

const scan1 = readFileSync(resolve(__dirname, 'sampleScans', 'scan1.txt'), { encoding: 'utf8' })

describe('read', () => {
  it('should return an array of parsed results', async () => {
    const scanResults = read(scan1)
    console.log(scanResults)
    expect(scanResults[0]).toBe('000000000')
    expect(scanResults[1]).toBe('111111111')
    expect(scanResults[2]).toBe('222222222')
    expect(scanResults[3]).toBe('333333333')
    expect(scanResults[4]).toBe('444444444')
    expect(scanResults[5]).toBe('555555555')
    expect(scanResults[6]).toBe('666666666')
    expect(scanResults[7]).toBe('777777777')
    expect(scanResults[8]).toBe('888888888')
    expect(scanResults[9]).toBe('999999999')
    expect(scanResults[10]).toBe('123456789')
    // expect(a).toBe(b)
  })
})
