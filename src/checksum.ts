/*
  account number:  3  4  5  8  8  2  8  6  5
  position names:  d9 d8 d7 d6 d5 d4 d3 d2 d1
  checksum calculation:

  (d1 + 2*d2 + 3*d3 +..+ 9*d9) mod 11 = 0
*/

const CHAR_LENGTH = 9

export const checksum = (num: number) => {
  const numString = num.toString()
  if (numString.length !== CHAR_LENGTH) throw new Error('Account numbers must be 9 digits long')
  const sum = numString
    .split('') // split into characters
    .map((digit) => parseInt(digit, 10)) // back into ints
    /* multiply each digit according to it's 'position name'
     *  -> [0] is 'd9', multiply by: (9 - 0) = 9
     *  -> [1] is 'd8', multiply by: (9 - 1) = 8, etc
     **/
    .map((num, index) => num * (CHAR_LENGTH - index))
    .reduce((acc, num) => acc + num, 0) // sum
  return sum % 11 === 0
}
