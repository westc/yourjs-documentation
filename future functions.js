function mapFilter() {} // https://www.yourjs.com/console/?gist=f7062146ad31a501ec0e37f0f89c2eb0&file=mapFilter.js

function only() {} // https://www.yourjs.com/console/?gist=21095b56aa3aa03300fce3aed6f77c3b&file=only.js

function chunk() {} // https://www.yourjs.com/console/?gist=83212999f5de5dd92a6fa79bc4c6f285&file=chunk.js

function includes() {} // https://www.yourjs.com/console/?gist=e7eb0bf516827fa7b0380d8da4fe05c6&file=includes+and+indexOf.js

function indexOf() {} // https://www.yourjs.com/console/?gist=e7eb0bf516827fa7b0380d8da4fe05c6&file=includes+and+indexOf.js

function repeat() {} // https://www.yourjs.com/console/?gist=bb937db3001f6c1a91a68db34db7bf09&file=repeat.js

function endsWith() {} // https://www.yourjs.com/console/?gist=eab12ae30a1991df0514350b6ad18552&file=endsWith.js

function startsWith() {} // https://www.yourjs.com/console/?gist=7b98abf484dd8a3c10e4a33ffeee467e&file=startsWith.js

function flatMap() {} // https://www.yourjs.com/console/?gist=c15e64baea1773744923777130feec68&file=flatMap.js

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
