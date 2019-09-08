/*******************************************************************************
// Original code for callOf() and applyOf()
function callOf(fn, opt_owner, opt_objThis) {
  if ('string' === typeof fn) {
    fn = opt_owner[fn];
  }
  return arguments.length < 3
    ? function(opt_objThis) { return fn.apply(opt_objThis, [].slice.call(arguments, 1)); }
    : function () { return fn.apply(opt_objThis, arguments); };
}
function applyOf(fn, opt_owner, opt_objThis) {
  if ('string' === typeof fn) {
    fn = opt_owner[fn];
  }
  return arguments.length < 3
    ? function(opt_objThis, args) { return fn.apply(opt_objThis, args); }
    : function (args) { return fn.apply(opt_objThis, args); };
}
*******************************************************************************/
eval('0call2[].slice.call(arguments,1)3arguments)}}0apply2b3b)}}'.replace(/\d/g, function (i) {
  return [
    'function ',
    1,
    'Of(a,b,c){"string"===typeof a&&(a=b[a]);return 3>arguments.length?function(d,b){return a.apply(d,',
    ')}:function(b){return a.apply(c,'
  ][i];
}));

// Allows for an array or an array like structure to be stepped through in the order specified
// after each iteration.
function step(array, callback, opt_stepValue, opt_startIndex) {
  opt_stepValue = ~~opt_stepValue || 1;
  var count = array.length;
  var i = (opt_startIndex == undefined || isNaN(~~opt_startIndex))
    ? opt_stepValue < 0
      ? count - 1
      : 0
    : opt_startIndex;
  i = (~~i % count + count) % count;
  for (var newStep, value, result = []; 0 <= i && i < array.length; i += opt_stepValue) {
    newStep = callback(value = array[i], i, array);
    result.push(value);
    opt_stepValue = newStep != undefined ? ~~newStep || 0 : opt_stepValue;
  }
  return result;
}
