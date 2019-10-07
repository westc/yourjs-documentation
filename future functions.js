// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint#Polyfill
var fromCodePoint;
(function(fromCharCode) {
  fromCodePoint = function(_) {
    var codeUnits = [], codeLen = 0, result = "";
    for (var args = arguments, index = 0, len = args.length; index < len; ++index) {
      var codePoint = +args[index];
      // correctly handles all cases including `NaN`, `-Infinity`, `+Infinity`
      // The surrounding `!(...)` is required to correctly handle `NaN` cases
      // The (codePoint>>>0) === codePoint clause handles decimals and negatives
      if (!(codePoint < 1114111 && (codePoint>>>0) === codePoint))
        throw RangeError("Invalid code point: " + codePoint);
      if (codePoint <= 65535) { // BMP code point
        codeLen = codeUnits.push(codePoint);
      } else { // Astral code point; split in surrogate halves
        // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
        codePoint -= 65536;
        codeLen = codeUnits.push(
          (codePoint >> 10) + 55296,  // highSurrogate
          (codePoint % 1024) + 56320 // lowSurrogate
        );
      }
      if (codeLen >= 16383) {
        result += fromCharCode.apply(null, codeUnits);
        codeUnits.length = 0;
      }
    }
    return result + fromCharCode.apply(null, codeUnits);
  };
})(String.fromCharCode);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt#Polyfill
function codePointAt(string, position) {
  var size = string.length;
  if (position != position) { // NaN
    position = 0;
  }
  // Account for out-of-bounds indices:
  if (position < 0 || position >= size) {
    return undefined;
  }
  // Get the first code unit
  var first = string.charCodeAt(position);
  var second;
  if ( // check if it’s the start of a surrogate pair
    first >= 55296 && first <= 56319 && // high surrogate
    size > position + 1 // there is a next code unit
  ) {
    second = string.charCodeAt(position + 1);
    if (second >= 56320 && second <= 57343) { // low surrogate
      // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
      return (first - 55296) * 1024 + second - 56320 + 65536;
    }
  }
  return first;
}
