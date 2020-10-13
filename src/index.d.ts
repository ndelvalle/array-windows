declare module 'array-windows' {
  /**
   * Iterator over all contiguous windows (overlapping subslices) of
   * predetermined `size` from a given array. The windows overlap. If the
   * window slice is shorter than `size`, the iteration ends. `size` must not
   * be bigger than the array length.
   * @param arr An array containing the values that we want to iterate through.
   * @param size It represents how many values to the right of the current
   * iteration index the the algorithm will take into account to call the
   * callback with.
   * @param callback This function will receive the window slice as an
   * argument, the length of this array is determined by the `size`
   * attribute. If the window slice is shorter than the `size` the
   * iteration ends.
   */
  export default function arrayWindows<T>(
    arr: T[],
    size: number,
    callback: (win: T[]) => void,
  ): void
}
