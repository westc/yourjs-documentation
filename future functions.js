function only() {} // https://www.yourjs.com/console/?gist=21095b56aa3aa03300fce3aed6f77c3b&file=only.js

function chunk() {} // https://www.yourjs.com/console/?gist=83212999f5de5dd92a6fa79bc4c6f285&file=chunk.js

function includes() {} // https://www.yourjs.com/console/?gist=e7eb0bf516827fa7b0380d8da4fe05c6&file=includes+and+indexOf.js

function indexOf() {} // https://www.yourjs.com/console/?gist=e7eb0bf516827fa7b0380d8da4fe05c6&file=includes+and+indexOf.js

function repeat() {} // https://www.yourjs.com/console/?gist=bb937db3001f6c1a91a68db34db7bf09&file=repeat.js

function endsWith() {} // https://www.yourjs.com/console/?gist=eab12ae30a1991df0514350b6ad18552&file=endsWith.js

function startsWith() {} // https://www.yourjs.com/console/?gist=7b98abf484dd8a3c10e4a33ffeee467e&file=startsWith.js

function flatMap() {} // https://www.yourjs.com/console/?gist=c15e64baea1773744923777130feec68&file=flatMap.js

function int8() {} // https://www.yourjs.com/console?gist=8069af4c97dd6dd1148e271d0314aba2&file=integer+functions.js

function uint8() {} // https://www.yourjs.com/console?gist=8069af4c97dd6dd1148e271d0314aba2&file=integer+functions.js

function int16() {} // https://www.yourjs.com/console?gist=8069af4c97dd6dd1148e271d0314aba2&file=integer+functions.js

function uint16() {} // https://www.yourjs.com/console?gist=8069af4c97dd6dd1148e271d0314aba2&file=integer+functions.js

function int32() {} // https://www.yourjs.com/console?gist=8069af4c97dd6dd1148e271d0314aba2&file=integer+functions.js

function uint32() {} // https://www.yourjs.com/console?gist=8069af4c97dd6dd1148e271d0314aba2&file=integer+functions.js

function fround() {} // https://www.yourjs.com/console/?gist=b2cf4654d579575da6c929622edfc499&file=fround.js

function log2() {} // https://www.yourjs.com/console/?gist=df3a1c88054516d2897428d2e6d3d6b0&file=log2+and+log10.js

function log10() {} // https://www.yourjs.com/console/?gist=df3a1c88054516d2897428d2e6d3d6b0&file=log2+and+log10.js

function repeat() {} // https://www.yourjs.com/console/?gist=bb937db3001f6c1a91a68db34db7bf09&file=repeat.js

function copySign() {} // https://www.yourjs.com/console?gist=e1dc5ccb4771b1df5f3ed4f378465aac&file=copySign.js

function sameSign() {} // https://www.yourjs.com/console?gist=f3813f782ca82c36ee6883fe87f6fbc0&file=sameSign.js

// Used to always get the native name of a value.
// This is different from typeOf() because it solely relies on the environment to get the type name.
function nativeName(x) {
  return __EMPTY_OBJECT.toString.call(x).slice(8, -1);
}

// Fix is() by removing explicit reference to YourJS
function is(x, y) {
  x = x === y
    ? x !== 0 || 1 / x == 1 / y // -0 vs 0
    : (x != x && y != y); // NaN
  return x && arguments.length > 2
    ? is.apply(0, slice(arguments, 1))
    : x;
}

// Fix copyProps() by removing big arrow function (=>)
function copyProps(target, source, keys) {
  if (target != undefined && source != undefined) {
    keys.forEach(function(k) {
      if (has(source, k)) {
        target[k] = source[k];
      }
    });
  }
  return target;
}
