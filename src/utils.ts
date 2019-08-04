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
