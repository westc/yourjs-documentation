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

// // ORIGINAL CODE FOR codePointAt()
// // Allows for a negative position.  Similar to String#codePointAt():
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt#Polyfill
// function codePointAt(string, position) {
//   var x, y, l = string.length;
//   position = position < 0 ? position + l : (position || 0);
//   // Get the first code unit
//   x = string.charCodeAt(position);
//   if ( // check if it’s the start of a surrogate pair
//     x >= 55296 && x <= 56319 && // high surrogate
//     l > position + 1 // there is a next code unit
//   ) {
//     y = string.charCodeAt(position + 1);
//     if (y >= 56320 && y <= 57343) { // low surrogate
//       // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
//       x = (x - 55296) * 1024 + y - 56320 + 65536;
//       position++;
//     }
//   }
//   return x;
// }
// // ORIGINAL CODE FOR toCodePoint()
// // Based on polyfill for String#codePointAt():
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt#Polyfill
// function toCodePoint(string) {
//   for (var x, y, l = string.length, position = 0, a = []; position < l; position++) {
//     // Get the first code unit
//     x = string.charCodeAt(position);
//     if ( // check if it’s the start of a surrogate pair
//       x >= 55296 && x <= 56319 && // high surrogate
//       l > position + 1 // there is a next code unit
//     ) {
//       y = string.charCodeAt(position + 1);
//       if (y >= 56320 && y <= 57343) { // low surrogate
//         // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
//         x = (x - 55296) * 1024 + y - 56320 + 65536;
//         position++;
//       }
//     }
//     a.push(x);
//   }
//   return a;
// }
eval('ZtoCY(d){for(X,b=0,e=[];b<f;b++)W,e.push(a)Ve}ZcYAt(d,b){X;b=0>b?f+b:b||0;WVa}'.replace(
  /[V-Z]/g,
  function (c) {
    return {
      Z: 'function ',
      Y: 'odePoint',
      X: 'var a,c,f=d.length',
      W: 'a=d.charCodeAt(b),55296<=a&&56319>=a&&f>b+1&&(c=d.charCodeAt(b+1),56320<=c&&57343>=c&&(a=1024*(a-55296)+c-56320+65536,b++))',
      V: ';return '
    }[c];
  }
));

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


// // The findWhere(), findLastWhere() and where() functions are derived from the following code:
// function findWhere(array) {
//   // "rl" is the number of args to check
//   for (var args = arguments, rl = ((args.length + 1) | 1) - 2, i = 0, l = array.length; i < l; i++) {
//     if (array[i] != undefined) {
//       for (var ri = 1; ri < rl;) {
//         for (var item = array[i], comparer = '===', path = args[ri++], value = args[ri++], pi = 0, pl = path.length; pi < pl; pi++) {
//           var pathPart = path[pi];
//           if (item == undefined) {
//             pi = pl + 1;
//           }
//           else if (pi === 0 && (pathPart === '!~' || pathPart === '~' || pathPart === '!()' || pathPart === '()' || pathPart === '===' || pathPart === '==' || pathPart === '<=' || pathPart === '>=' || pathPart === '!=' || pathPart === '!==' || pathPart === '<' || pathPart === '>')) {
//             comparer = pathPart;
//           }
//           else {
//             item = item[pathPart];
//           }
//         }
//         if (
//           (pi > pl)
//           || (
//             (value !== value)
//             ? (
//               ((comparer === '===' || comparer === '==' || comparer === '>=' || comparer === '<=') && item === item)
//               || ((comparer === '!==' || comparer === '!=') && item !== item)
//               || comparer.indexOf('=') < 0
//             )
//             : (
//               (comparer === '===' && item !== value)
//               || (comparer === '==' && item != value)
//               || (comparer === '!==' && item === value)
//               || (comparer === '!=' && item == value)
//               || (comparer === '<=' && item > value)
//               || (comparer === '>=' && item < value)
//               || (comparer === '>' && item <= value)
//               || (comparer === '<' && item >= value)
//               || (comparer === '~' && !value.test(item))
//               || (comparer === '!~' && value.test(item))
//               || (comparer === '()' && !value(item))
//               || (comparer === '!()' && value(item))
//             )
//           )
//         ) {
//           ri = rl + 1;
//         }
//       }
//       if (ri === rl) {
//         return array[i];
//       }
//     }
//   }
// }
eval('AfindWBg=0,pC<p;g++DEAfindLastWBgC--;DEAwBi=[],g=0,pC<p;g++Di.push(h[g])}return i}'
  .replace(/[A-E]/g, function(c) {
    return {
      A: 'function ',
      B: 'here(h){for(var a,k=arguments,l=(k.length+1|1)-2,',
      C: '=h.length;g',
      D: ')if(void 0!=h[g]){for(var f=1;f<l;){for(var a=h[g],b=#",n=k[f++],c=k[f++],e=0,m=n.length;e<m;e++){var d=n[e];void 0==a?e=m+1:0!==e||"~@!~@()"!==d&&#@==@<=@>=@!=@!==@<@>"!==d?a=a[d]:b=d}if(e>m||(c!==c?(##b||"==#b||">=#b||"<=#b)&&a===a||("!==#b||"!=#b)&&a!==a||b.indexOf("=")<0:##b&&a!==c||"==#b&&a!=c||"!==#b&&a===c||"!=#b&&a==c||"<=#b&&a>c||">=#b&&a<c||">#b&&a<=c||"<#b&&a>=c||"~#b&&!c.test(a)||"!~#b&&c.test(a)||"()#b&&!c(a)))f=l+1}if(f===l)',
      E: 'return h[g]}}'
    }[c];
  })
  .replace(/#/g,'"===')
  .replace(/@/g,'"!==d&&"')
);
