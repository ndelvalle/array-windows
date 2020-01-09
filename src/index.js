'use strict'

function arrayWindows(arr, windowSize, cb) {
  if (typeof cb !== 'function') {
    throw new Error('Callback argument must be a function')
  }

  if (typeof windowSize !== 'number' || windowSize <= 0) {
    throw new Error('Window size argument must be a number greater than zero')
  }

  if (windowSize > arr.length) {
    throw new Error('Window size argument must be lower than given Array size')
  }

  for (let i = 0; i < arr.length; i += 1) {
    const slice = arr.slice(i, i + windowSize)

    if (windowSize > slice.length) {
      break
    }

    cb(slice)
  }
}

module.exports = arrayWindows
