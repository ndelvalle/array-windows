'use strict'

/* global describe, it, expect */

const arrayWindows = require('../src')
const noop = () => {}

describe('array-windows', function() {
  it('expose a function as default export', function() {
    expect(typeof arrayWindows).toBe('function')
  })

  it('loops through an array calling the CB with the specified window', function() {
    const windowSize = 2
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    const wins = [
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6],
      [6, 7],
      [7, 8],
      [8, 9],
      [9, 10],
      [10, 11],
    ]

    let index = 0
    arrayWindows(arr, windowSize, function(win) {
      expect(Array.isArray(win)).toEqual(true)
      expect(win).toStrictEqual(wins[index])
      index += 1
    })
  })

  it('throws if window size is not a valid number', function() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

    expect(function() {
      arrayWindows(arr, undefined, noop)
    }).toThrow()

    expect(function() {
      arrayWindows(arr, 0, noop)
    }).toThrow()
  })

  it('throws if window size is lower than the given array length', function() {
    const arr = [1, 2, 3]

    expect(function() {
      arrayWindows(arr, 10, noop)
    }).toThrow()
  })

  it('throws if the given callback is not a function', function() {
    const arr = [1, 2, 3]

    expect(function() {
      arrayWindows(arr, 10, undefined)
    }).toThrow()
  })
})
