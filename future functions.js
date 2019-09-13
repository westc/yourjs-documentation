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
// Example at:  https://www.yourjs.com/console/?gist=b93e3d6df9070b4f5fee28a9331c626d&file=step-example.js
function step(array, callback, opt_stepValue, opt_startIndex) {
  opt_stepValue = ~~opt_stepValue || 1;
  var count = array.length;
  var i = (opt_startIndex == undefined || isNaN(~~opt_startIndex))
    ? opt_stepValue < 0
      ? count - 1
      : 0
    : opt_startIndex;
  i = (~~i % count + count) % count;
  for (var newStep, result = []; 0 <= i && i < array.length; i += opt_stepValue) {
    newStep = callback(array[i], i, array);
    result.push(array[i]);
    opt_stepValue = newStep != undefined ? ~~newStep || 0 : opt_stepValue;
  }
  return result;
}

// requires nativeType(), isValidVarName(), has()
// blockify() will create global variables and when the returned code is executed via eval() the
// global variables will be deleted and will only be included in the block in which eval executes.
function blockify(obj, opt_filter, opt_overwrite) {
  var filterType = nativeType(opt_filter);
  var filter = filterType === 'Function'
    ? opt_filter
    : filterType === 'Array'
      ? function(key) { return opt_filter.indexOf(key) >= 0; } // Array#indexOf() has IE9+ support
      : filterType === 'RegExp'
        ? function(key) { return opt_filter.test(key); }
        : filterType === 'Function'
          ? opt_filter
          : function(key) { return opt_filter !== key; };
  opt_overwrite = opt_overwrite === undefined ? true : !!opt_overwrite;
  var code = ['try{if(@===undefined){throw 1}}catch(e){throw new Error("Specified block no longer exists.")}'];
  var global = (function() { return this; })();
  for (var id; has(global, id = '*yjsBlock' + Math.random()););
  global[id] = Object.keys(obj).reduce(function(carry, key) {
    if (isValidVarName(key) && filter(key)) {
      carry[key] = obj[key];
      code.push('var ' + key + (!opt_overwrite ? '=' + key + '===undefined?@.' + key + ':' : '=@.') + key);
    }
    return carry;
  }, {});
  code.push('delete @');
  return code.join(';').replace(/@/g, '(function(){return this})()["' + id + '"]');
}
