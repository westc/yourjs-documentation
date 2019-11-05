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

// ORIGINAL SOURCE CODE:  hasIn(), setIn(), getIn()
// // hasIn({name:{first:'Chris'}}, ['name','last']);
// function hasIn(obj, key,nothing) {
//   key = Object.prototype.toString.call(key) === '[object Array]' ? key : [key];
//   for (
//     var target = obj, i = 0, l = key.length;
//     target && 'object' === typeof target && key[i] in target && ++i < l;
//     target = target[key[i-1]]
//   );
//   return i === l;
// }

// function setIn(obj, key, value) {
//   key = Object.prototype.toString.call(key) === '[object Array]' ? key : [key];
//   for (
//     var target = obj, i = 0, l = key.length - 1;
//     target && 'object' === typeof target && key[i] in target && i < l;
//     target = target[key[i++]]
//   );
//   if (i === l && target != undefined) {
//     target[key[i]] = value;
//   }
//   return obj;
// }

// function getIn(obj, key, opt_default) {
//   key = Object.prototype.toString.call(key) === '[object Array]' ? key : [key];
//   for (
//     var target = obj, i = 0, l = key.length;
//     target && 'object' === typeof target && key[i] in target && ++i < l;
//     target = target[key[i-1]]
//   );
//   return i === l ? target[key[i - 1]] : opt_default;
// }

eval(
  'AhasBC++D-1]]);E}AsetB-1CD++]]);d===f&&void 0!=b&&(b[a[d]]=e);return c}AgetBC++D-1]]);E?b[a[d-1]]:e}'
    .replace(/[A-E]/g, function(c) {
      return {
        A: 'function ',
        B: 'In(c,a,e){a="[object Array]"===Object.prototype.toString.call(a)?a:[a];for(var b=c,d=0,f=a.length',
        C: ';b&&"object"===typeof b&&a[d]in b&&',
        D: 'd<f;b=b[a[d',
        E: 'return d===f'
      }[c];
    })
);

/**
 * @name remove
 * Removes a target value from the specified array.
 * @param array {Array} The array from which the specified value should be removed.
 * @param target {*} The value that should be removed from array.
 * @param opt_maxRemovals {number} Optional.  Defaults to Infinity.  The maximum number of times target should be removed from array.
 * @returns {Array} The array that was passed in.
 */
/*
// ORIGINAL CODE FOR remove(), removeRight() and removeAll():
function remove(array, target, opt_maxRemovals) {
  opt_maxRemovals = opt_maxRemovals != undefined ? ~~opt_maxRemovals || 0 : 1;
  for (var v, isnan = target !== target, i = -1, l = array.length; ++i < l && 0 < opt_maxRemovals;) {
    if (i in array) {
      v = array[i];
      if (isnan ? v !== v : target === v) {
        array.splice(i, 1);
        i--;
        f--;
        opt_maxRemovals--;
      }
    }
  }
  return array;
}
function removeRight(array, target, opt_maxRemovals) {
  opt_maxRemovals = opt_maxRemovals != undefined ? ~~opt_maxRemovals || 0 : 1;
  for (var v, isnan = target !== target, i = array.length; 0 < i-- && 0 < opt_maxRemovals;) {
    if (i in array) {
      v = array[i];
      if (isnan ? v !== v : target === v) {
        array.splice(i, 1);
        opt_maxRemovals--;
      }
    }
  }
  return array;
}
function removeAll(array, target) {
  for (var v, isnan = target !== target, i = array.length; 0 < i--;) {
    if (i in array) {
      v = array[i];
      if (isnan ? v !== v : target === v) {
        array.splice(i, 1);
      }
    }
  }
  return array;
}
*/
eval('ZYXW=-1,fV++d<f&&0<bU,d--,f--,b--TZRightYXWV0<d--&&0<bU,b--TZAllYWV0<d--UT'.replace(
  /[T-Z]/g,
  function (c) {
    return {
      Z: 'function remove',
      Y: '(a,e,b){',
      X: 'b=void 0!=b?~~b||0:1;',
      W: 'for(var c,g=e!==e,d',
      V: '=a.length;',
      U: ';)d in a&&(c=a[d],g?c!==c:e===c)&&(a.splice(d,1)',
      T: ');return a}'
    }[c];
  }
));

// function filterPropNames(obj, tester, opt_negate) {
//   opt_negate = !opt_negate;
//   for (var key, result = [], keys = Object.getOwnPropertyNames(obj), i = keys.length; i--;) {
//     key = keys[i];
//     if (!tester(key, obj[key], obj) !== opt_negate) {
//       result.unshift(key);
//     }
//   }
//   return result;
// }
// function filterKeys(obj, tester, opt_negate) {
//   opt_negate = !opt_negate;
//   for (var key, result = [], keys = Object.keys(obj), i = keys.length; i--;) {
//     key = keys[i];
//     if (!tester(key, obj[key], obj) !== opt_negate) {
//       result.unshift(key);
//     }
//   }
//   return result;
// }
// function filterProps(obj, tester, opt_negate) {
//   opt_negate = !opt_negate;
//   for (var key, result = [], keys = Object.getOwnPropertyNames(obj), i = keys.length; i--;) {
//     key = keys[i];
//     if (!tester(obj[key], key, obj) !== opt_negate) {
//       result.unshift(obj[key]);
//     }
//   }
//   return result;
// }
// function filterValues(obj, tester, opt_negate) {
//   opt_negate = !opt_negate;
//   for (var key, result = [], keys = Object.keys(obj), i = keys.length; i--;) {
//     key = keys[i];
//     if (!tester(obj[key], key, obj) !== opt_negate) {
//       result.unshift(obj[key]);
//     }
//   }
//   return result;
// }
// function filterPropEntries(obj, tester, opt_negate) {
//   opt_negate = !opt_negate;
//   for (var key, result = [], keys = Object.getOwnPropertyNames(obj), i = keys.length; i--;) {
//     key = keys[i];
//     if (!tester(key, obj[key], obj) !== opt_negate) {
//       result.unshift([key, obj[key]]);
//     }
//   }
//   return result;
// }
// function filterEntries(obj, tester, opt_negate) {
//   opt_negate = !opt_negate;
//   for (var key, result = [], keys = Object.keys(obj), i = keys.length; i--;) {
//     key = keys[i];
//     if (!tester(key, obj[key], obj) !== opt_negate) {
//       result.unshift([key, obj[key]]);
//     }
//   }
//   return result;
// }
eval('QPropNamesRSTa,WUaXQKeysRkeysTa,WUaXQPropsRSTW,aUWXQValuesRkeysTW,aUWXQPropEntriesRSTa,WU[a,W]XQEntriesRkeysTa,WU[a,W]X'.replace(/[Q-UWX]/g, function(c) {
  return {
    Q: 'function filter',
    R: '(b,f,g){g=!g;for(var a,c=[],d=Object.',
    S: 'getOwnPropertyNames',
    T: '(b),e=d.length;e--;)a=d[e],!f(',
    U: ',b)!==g&&c.unshift(',
    W: 'b[a]',
    X: ');return c}',
  }[c];
}));
