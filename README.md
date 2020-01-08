# array-windows

Iterator over all contiguous windows (overlapping subslices) of predetermined
`size` from a given array. The windows overlap. If the window slice is shorter
than `size`, the iteration ends. `size` must not be bigger than the array length.

## Install

```bash
$ npm install array-windows
```

```bash
$ yarn add array-windows
```

## Use

```js
const arrayWindows = require('array-windows')
const arr = ['b', 'a', 'l', 'i']
const windowSize = 2

arrayWindows(arr, windowSize, function(win) {
  // win variable contains an array with length equals to windowSize
  // 1 Iteration: win is ['b', 'a']
  // 2 Iteration: win is ['a', 'l']
  // 3 Iteration: win is ['l', 'i']
})
```

### API

#### arrayWindows(array, size, callback)

###### array `array`

An array containing the values that we want to iterate through.

###### size `number`

It represents how many values to the right of the current iteration index the
the algorithm will take into account to call the callback with.

###### callback(win) `function`

This function will receive the window slice as an argument, the length of this
array is determined by the `size` attribute. If the window slice is shorter than
the `size` the iteration ends.
