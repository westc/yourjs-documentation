function mapFilter() {} // https://www.yourjs.com/console/?gist=f7062146ad31a501ec0e37f0f89c2eb0&file=mapFilter.js

function only() {} // https://www.yourjs.com/console/?gist=21095b56aa3aa03300fce3aed6f77c3b&file=only.js

// Fix for time():  Added return for wrapper function
function time(fn, times) {
  var timesIsFunction = 'function' === typeof times;
  return function() {
    var startTime = +new Date,
        result = fn.apply(this, arguments),
        endTime = +new Date,
        timingData = {
          elapsed: endTime - startTime,
          start: startTime,
          end: endTime,
          returnValue: result,
          'function': fn,
          'this': this,
          'arguments': arguments
        };
    timesIsFunction ? times(timingData) : times.push(timingData);
    return result;
  };
}
