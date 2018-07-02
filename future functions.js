/**
 * Creates an array with the span of numbers going from `first` and ending at
 * `last` if possible depending on the specified step value.
 * @param {number} first
 *   First number that should appear in the returned array.
 * @param {number} last
 *   Last number that should appear in the returned array.
 * @param {number=} opt_step 
 *   Defaults to `1` if not given or if `0` or `NaN` is specified.  The
 *   difference between each subsequent number in the returned array.
 * @param {?Function=} opt_mapper
 *   Function to call for each number in the sequence and whose return value
 *   will be used as the value added to the returned array.
 * @returns {Array}
 *   An array containing the sequence of numbers starting at `first` and ending
 *   at `last`.  If `first` is less than `last` and `opt_step` is less than `0`
 *   or if `last` is less than `first` and `opt_step` is greater than `0` an
 *   empty array will be returned.  If `opt_mapper` is given the array will
 *   contain the sequence of mapped.
 */
function span(first, last, opt_step, opt_mapper) {
  opt_step = +opt_step || 1;
  for (var result = [], mult = opt_step < 0 ? -1 : 1; mult * (last - first) >= 0; first += opt_step) {
    result.push(opt_mapper ? opt_mapper(first) : first);
  }
  return result;
}

/**
 * @name around
 * Gets the substrings around a specific target.
 * @param {string} subject
 *   The string to search.
 * @param {string|RegExp} target
 *   The target to find and key off of within `subject`.
 * @param {number=} opt_occurrence
 *   Defaults to `1`. The occurrence of `target` that you want to key off of
 *   within `subject`. If negative, the occurrence will be counted from the end
 *   of `subject`.
 * @returns {Array}
 *   Returns an array with two values: the string found before `target` and the
 *   string found after `target`. If `target` was not found or the specified
 *   occurrence (`opt_occurrence`) of `target` was not found, `[null, null]`
 *   will be returned.
 */
/**
 * @name before
 * Finds the substring before a specific target.
 * @param {string} subject
 *   The string to search.
 * @param {string|RegExp} target
 *   The target to find and key off of within `subject`.
 * @param {number=} opt_occurrence
 *   Defaults to `1`. The occurrence of `target` that you want to key off of
 *   within `subject`. If negative, the occurrence will be counted from the end
 *   of `subject`.
 * @returns {string|null}
 *   Returns the string found before `target`. If `target` was not found or the
 *   specified occurrence (`opt_occurrence`) of `target` was not found, `null`
 *   will be returned.
 */
/**
 * @name after
 * Finds the substring after a specific target.
 * @param {string} subject
 *   The string to search.
 * @param {string|RegExp} target
 *   The target to find and key off of within `subject`.
 * @param {number=} opt_occurrence
 *   Defaults to `1`. The occurrence of `target` that you want to key off of
 *   within `subject`. If negative, the occurrence will be counted from the end
 *   of `subject`.
 * @returns {string|null}
 *   Returns the string found after `target`. If `target` was not found or the
 *   specified occurrence (`opt_occurrence`) of `target` was not found, `null`
 *   will be returned.
 */
var around = Function('P,T,M,Q', 'return[ , [0], [1]]'.replace(/ ([^,]{3})?/g, 'function(a,b,d){var e,c=[];d=P(d||1,10);b=(T(b)==="RegExp"?M:Q)(b,"g");a.replace(b,function(a,b){e=arguments;c.push([b=e[e.length-2],a.length+b])});a=(c=c[d+(0<d?-1:c.length)])?[a.slice(0,c[0]),a.slice(c[1])]:[null,null];return a$1}'))(parseInt, YourJS.typeOf, YourJS.modRegExp, YourJS.quoteRegExp),
    before = around[1],
    after = around[2];
around = around[0];

/**
 * @name upperCase
 * Takes a value that will then be upper-cased.
 * @param {string|*} str
 *   The string or value to be upper-cased.
 * @returns {string}
 *   `str` coerced to a string with all of the characters upper-cased.
 */
/**
 * @name lowerCase
 * Takes a value that will then be lower-cased.
 * @param {string|*} str
 *   The string or value to be lower-cased.
 * @returns {string}
 *   `str` coerced to a string with all of the characters lower-cased.
 */
eval('LlowUupp'.replace(/(.)(.(..))/g, 'function $2erCase(s){return(arguments.length?s+"":"").to$1$3erCase()}'));
