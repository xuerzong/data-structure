const chunk = <T>(array: T[], size = 0): T[][] => {
  size = Math.max(size, 0)
  const arrayLength = array.length

  if (arrayLength === 0 || size === 0) {
    return []
  }

  return array.slice(1).reduce(
    (pre, cur) => {
      const lastOne = pre[pre.length - 1]
      if (lastOne.length < size) {
        lastOne.push(cur)
        return pre
      }
      return [...pre, [cur]]
    },
    [[array[0]]]
  )
}

export default chunk
