import { checksum } from '../checksum'

describe('checksum', () => {
  /* 🤔  I'm not sure if there is a better way to test this other than
   *     passing in numbers that are already known to pass or fail? */
  it('should return true with correct numbers', () => {
    expect(checksum(457508000)).toBe(true)
  })

  it('should return true with correct numbers', () => {
    expect(checksum(457508001)).toBe(false)
    expect(checksum(457508010)).toBe(false)
    expect(checksum(457508100)).toBe(false)
  })

  it('should throw an error when given a number that is not 9 digits', () => {
    expect(() => checksum(1)).toThrow('Account numbers must be 9 digits long')
  })
})
