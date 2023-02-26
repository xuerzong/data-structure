import chunk from '.'

it('utils.is', () => {
  expect(chunk([1, 2, 3], 2)).toEqual([[1, 2], [3]])
  expect(chunk([1, 2, 3, 4, 5], 3)).toEqual([
    [1, 2, 3],
    [4, 5],
  ])
})
