import { sliceGroup } from '../utils'

describe('sliceGroup', () => {
  it('should split up an array into groups of N length', async () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    expect(sliceGroup(2, arr)).toMatchObject([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]])
    expect(sliceGroup(3, arr)).toMatchObject([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]])
    expect(sliceGroup(4, arr)).toMatchObject([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10]])
    expect(sliceGroup(5, arr)).toMatchObject([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]])
    expect(sliceGroup(6, arr)).toMatchObject([[1, 2, 3, 4, 5, 6], [7, 8, 9, 10]])
  })
})
