# array-windows

This library iterates over all contiguous windows of predetermined `size` in a
given array. The windows overlap. If the window slice is shorter than `size`,
the iteration ends.

## Install

```bash
$ npm install array-windows
```

```bash
$ yarn add array-windows
```

## Use

### Example 1
```js

const arr = ['b', 'a', 'l', 'i'];
const windowSize = 2

arrayWindows(arr, windowSize, function (win) {
  // win variable contains an array with length equals to windowSize
  // 1 Iteration: win is ['b', 'a']
  // 2 Iteration: win is ['a', 'l']
  // 3 Iteration: win is ['l', 'i']
})
```

### Example 2
```js
const arrayWindows = require('array-windows')

const arr = [1, 2, 3, 4, 5]
const windowSize = 2

arrayWindows(arr, windowSize, function (win) {
  // win variable contains an array with length equals to windowSize
  // 1 Iteration: win is [1, 2]
  // 2 Iteration: win is [2, 3]
  // 3 Iteration: win is [3, 4]
  // 4 Iteration: win is [4, 5]
})
```

### Example 3
```js
const arrayWindows = require('array-windows')

const arr = ['f', 'o', 'o']
const windowSize = 4

// This will throw because windowSize is bigger than the array length
arrayWindows(arr, windowSize, function (win) {})
```

### API

#### arrayWindows(array, windowSize, callback)

###### array `array`

An array containing the values that we want to iterate through.

###### windowSize `number`

It represents how many values to the right of the current iteration index the
the algorithm will take into account to call the callback with.

###### callback(win) `function`

This function will receive the window slice as an argument, the size of this
array is determined by the `windowSize`. If the window slice is shorter than
the `windowSize` the iteration ends.
