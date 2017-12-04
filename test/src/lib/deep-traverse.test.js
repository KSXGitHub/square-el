'use strict'
const {map} = require('../../../src/lib/deep-traverse')

describe('Function: map', () => {
  const fn = x => String(x)

  test('Non Array', () =>
    expect(map(123, fn)).toBe(fn(123))
  )

  test('Empty Array', () =>
    expect(map([], fn)).toEqual([])
  )

  test('Flat Array', () =>
    expect(map([123, 456, 789], fn)).toEqual([123, 456, 789].map(fn))
  )

  test('Hierarchical Array', () =>
    expect(map([
      123,
      [456, 789],
      [
        [null, undefined]
      ]
    ], fn)).toEqual([
      fn(123),
      [456, 789].map(fn),
      [
        [null, undefined].map(fn)
      ]
    ])
  )
})