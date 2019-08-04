import { getAmbiguousMatches } from '../characters'

describe('getAmbiguousMatches', () => {
  it('should return all possibilities where an underscore or pipe has been missed', async () => {
    const original = ' _ | _ '
    const matches = getAmbiguousMatches(original)
    expect(matches.length).toBe(3)
    expect(matches).toContain('   | _ ')
    expect(matches).toContain(' _   _ ')
    expect(matches).toContain(' _ |   ')
  })
})
