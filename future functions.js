/**
 * Creates an array with the range of numbers going from `first` and ending at
 * `last` if possible depending on the specified step value.
 * @param {number} first
 *   First number that should appear in the returned array.
 * @param {number} last
 *   Last number that should appear in the returned array.
 * @param {number=} opt_step 
 *   Defaults to `1` if not given or if `0` or `NaN` is specified.  The
 *   difference between each subsequent number in the returned array.
 * @returns {Array<number>}
 *   An array containing the sequence of numbers starting at `first` and ending
 *   at `last`.  If `first` is less than `last` and `opt_step` is less than `0`
 *   or if `last` is less than `first` and `opt_step` is greater than `0` an
 *   empty array will be returned.
 */
function fromTo(first, last, opt_step) {
  opt_step = +opt_step || 1;
  for (var result = [], mult = opt_step < 0 ? -1 : 1; mult * (last - first) >= 0; first += opt_step) {
    result.push(first);
  }
  return result;
}
