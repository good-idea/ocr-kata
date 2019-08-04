import { parseLine } from '../parseLine'

const oneToNine = [
  '    _  _     _  _  _  _  _ ',
  '  | _| _||_||_ |_   ||_||_|',
  '  ||_  _|  | _||_|  ||_| _|',
  '                           ',
]

describe('parseLine', () => {
  it('should split each line into 9 "characters"', () => {
    const charGroups = parseLine(oneToNine)
    // @ts-ignore TODO handle characters that do not match (currently the return undefined)
    expect(charGroups[0].digit).toBe(1)
    // @ts-ignore
    expect(charGroups[1].digit).toBe(2)
  })

  it('should throw an error if the scanned line is malformed', () => {
    const missingFirstLine = [
      /* */
      '  | _| _||_||_ |_   ||_||_|',
      '  ||_  _|  | _||_|  ||_| _|',
      '                           ',
    ]
    expect(() => parseLine(missingFirstLine)).toThrow()

    const missingLastLine = [
      /* */
      '    _  _     _  _  _  _  _ ',
      '  | _| _||_||_ |_   ||_||_|',
      '  ||_  _|  | _||_|  ||_| _|',
    ]
    expect(() => parseLine(missingLastLine)).toThrow()

    const missingLastColumn = [
      '    _  _     _  _  _  _  _',
      '  | _| _||_||_ |_   ||_||_',
      '  ||_  _|  | _||_|  ||_| _',
      '                           ',
    ]
    expect(() => parseLine(missingLastColumn)).toThrow('')

    const missingFirstColumn = [
      '   _  _     _  _  _  _  _ ',
      ' | _| _||_||_ |_   ||_||_|',
      ' ||_  _|  | _||_|  ||_| _|',
      '                           ',
    ]
    expect(() => parseLine(missingFirstColumn)).toThrow('')
  })
})
