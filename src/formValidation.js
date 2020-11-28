const maxNameLength = 10

export function isValidField (input) {
  return input.length <= maxNameLength
}

export function fixField (input) {
  return input.substring(0, maxNameLength)
}
