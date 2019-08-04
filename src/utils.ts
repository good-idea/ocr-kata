/* Split an array into groups of N length */
export const sliceGroup = <InputType>(groupSize: number, arr: InputType[]): Array<InputType[]> => {
  /* Get the first N Items */
  const firstGroup = arr.slice(0, groupSize)
  /* Get the rest of the items */
  const remainderGroups =
    arr.length > groupSize
      ? /* if there are more items in the arrray to group,
         * get them with slice, and group them with another call
         * to sliceGroup */
        sliceGroup(groupSize, arr.slice(groupSize))
      : /* otherwise, just an empty array */
        []
  return [firstGroup, ...remainderGroups]
}

/**
 * Replace a single character in a string at position N
 */
export const replaceCharacter = (original: string, replacement: string, index: number): string =>
  original.substr(0, index) + replacement + original.substr(index + replacement.length)

/**
 * Get all regex matches from a string, as an array
 * Adapted from:
 *https://github.com/lodash/lodash/issues/2459#issuecomment-230255219
 **/

interface Match {
  match: string
  offset: number
  groups: any[]
}

export const matchAll = (source: string, regex: RegExp): Match[] => {
  const matches: Match[] = []
  source.replace(regex, function() {
    matches.push({
      match: arguments[0],
      offset: arguments[arguments.length - 2],
      groups: Array.prototype.slice.call(arguments, 1, -2),
    })
    return arguments[0]
  })
  return matches
}
