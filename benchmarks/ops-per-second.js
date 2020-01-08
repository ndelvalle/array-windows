'use strict'

/* eslint-disable no-use-before-define,no-console */
/* eslint-disable import/no-extraneous-dependencies */
const Benchmark = require('benchmark')
const arrayWindows = require('../src')

const arr10 = createArray(10)
const arr100 = createArray(100)
const arr1000 = createArray(1000)
const arr10000 = createArray(10000)
const arr100000 = createArray(100000)
const arr1000000 = createArray(1000000)

benchmark(arr10)
benchmark(arr100)
benchmark(arr1000)
benchmark(arr10000)
benchmark(arr100000)
benchmark(arr1000000)

function benchmark(arr) {
  const suite = new Benchmark.Suite()
  const events = []
  const action = () => {}

  suite
    .add('Array windows', function() {
      arrayWindows(arr, 2, action)
    })
    .add('Array for each', function() {
      arr.forEach(() => {})
    })
    .add('Array for loop', function() {
      for (let i = 0; i < arr.length; i += 1) {
        action()
      }
    })
    .on('cycle', function(event) {
      events.push(String(event.target))
    })
    .on('complete', function() {
      console.log(`Benchmarks results using ${arr.length} items:`)
      events.forEach((e) => console.log(e))
      console.log()
    })
    .run({ async: false })
}

function createArray(length) {
  const sample = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const arr = Array(length)

  for (let i = 0; i < length; i += 1) {
    arr[i] = sample[i % sample.length]
  }

  return arr
}
