/**
 * @template T Type of the object
 * @param { T } source Source object
 * @returns { boolean } Boolean value indicating wether the source object is empty or not
 */
export const isEmpty = (source) => {
  if (typeof source === 'string') {
    return source.length === 0
  }

  if (typeof source === 'object') {
    return Object.keys(source).length === 0
  }

  return Boolean(source)
}
