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
