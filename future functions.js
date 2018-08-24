function mapFilter() {} // https://www.yourjs.com/console/?gist=f7062146ad31a501ec0e37f0f89c2eb0&file=mapFilter.js

function only() {} // https://www.yourjs.com/console/?gist=21095b56aa3aa03300fce3aed6f77c3b&file=only.js

function chunk() {} // https://www.yourjs.com/console/?gist=83212999f5de5dd92a6fa79bc4c6f285&file=chunk.js

// Fix is() by removing explicit reference to YourJS
function is(x, y) {
  x = x === y
    ? x !== 0 || 1 / x == 1 / y // -0 vs 0
    : (x != x && y != y); // NaN
  return x && arguments.length > 2
    ? is.apply(0, slice(arguments, 1))
    : x;
}

function includes() {} // https://www.yourjs.com/console/?gist=e7eb0bf516827fa7b0380d8da4fe05c6&file=includes+and+indexOf.js
function indexOf() {} // https://www.yourjs.com/console/?gist=e7eb0bf516827fa7b0380d8da4fe05c6&file=includes+and+indexOf.js
