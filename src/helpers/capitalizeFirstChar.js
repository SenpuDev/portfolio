export function capitalizeFirstChar (word) {
  const firstLetter = word.charAt(0).toUpperCase()
  const restOfString = word.slice(1)
  return (`${firstLetter}${restOfString}`)
}
