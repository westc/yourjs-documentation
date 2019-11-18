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
// function setIn(root, path, value) {
//   for (var target = root, i = -1, l = path.length - 1; target != undefined && ++i < l;) {
//     target = target[path[i]];
//   }
//   if (i === l) {
//     target[path[i]] = value;
//   }
//   return root;
// }

// function hasIn(root, path) {
//   for (var target = root, i = -1, l = path.length - 1; target != undefined && ++i < l;) {
//     target = target[path[i]];
//   }
//   return i === l && (('object' === typeof target && path[i] in target) || target[path[i]] !== undefined);
// }

// function getIn(root, path, opt_default) {
//   for (var target = root, i = -1, l = path.length; target != undefined && ++i < l;) {
//     target = target[path[i]];
//   }
//   return i === l ? target : opt_default;
// }

// function getAllIn(root, path) {
//   for (var target = root, i = -1, l = path.length, out = []; target != undefined && ++i < l;) {
//     target = target[path[i]];
//     out.push(target);
//   }
//   return out;
// }
eval(
  'ZsetY-1X;ifVt[p[i]]=vWr}ZhasY-1XWV&&("object"===typeof t&&p[i]in t||void 0!==t[p[i]])}ZgetYXWV?t:v}ZgetAllY,o=[]X,o.push(t)Wo}'
    .replace(/[V-Z]/g, function (c) {
      return {
        Z: 'function ',
        Y: 'In(r,p,v){for(var t=r,i=-1,l=p.length',
        X: ';void 0!=t&&++i<l;)(t=t[p[i]])',
        W: ';return ',
        V: '(i===l)'
      }[c];
    })
);

/**
 * @name remove
 * Removes a target value from the specified array.
 * @param array {Array} The array from which the specified value should be removed.
 * @param target {*} The value that should be removed from array.
 * @param opt_maxRemovals {number} Optional.  Defaults to 1.  The maximum number of times target should be removed from array.
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

// people = Array(10000000).fill({}).map((x, i) => ({ name: `Person #${i + 1}`, age: ~~(Math.random() * 100), score: ~~(Math.random() * 51 + 49) }));
// t = testFor(['>=', 'age'], 18, ['<=', 'age'], 21, ['~=', 'name'], /5/, ['>', 'score'], 95);
// for (var i = 0; i < 5; i++) {
//   console.time('r0');
//   r0 = people.filter(i => i != void 0 && i.age >= 18 && i.age <= 21 && /5/.test(i.name) && i.score > 95);
//   console.timeEnd('r0');
//
//   console.time('r1');
//   r1 = people.filter(t)
//   console.timeEnd('r1');
// }
function testFor() {
  for (var argNames = [], checks = [], rules = arguments, ri = 0, rl = (rules.length | 1) - 1; ri < rl; ri++) {
    var pathStart = 1,
      pathIndex = 1,
      path = rules[ri++],
      value = rules[ri],
      pathLength = path.length,
      comparer = path[0];
    if (!/^(([!=]=?|!?~|<|>)=|<|>|!?\(\))$/.test(comparer || '')) {
      comparer = '===';
      pathStart = pathIndex = 0;
    }
    // argNames.push(...) is only in for-loop to save some code (1 character lol)
    for (argNames.push('_' + ri, 'a' + ri); pathIndex <= pathLength; pathIndex++) {
      for (var code = 'i', i = pathStart; i < pathIndex; i++) {
        code += '[' + JSON.stringify(path[i]) + ']';
      }
      code = pathIndex + 1 > pathLength
        ? /~|\(/.test(comparer)
          ? ((/!/.test(comparer) ? '!' : '') + 'a' + ri + (/~/.test(comparer) ? '.test(' : '(') + code + ')')
          : (value !== value && /^[!=]/.test(comparer))
            ? code + (/!/.test(comparer) ? '===' : '!==') + code // Allows for comparison of NaN
            : (code + comparer + 'a' + ri)
        : (code + '!=void 0');
      if (checks.indexOf(code) < 0) {
        checks.push(code);
      }
    }
  }
  return Function(argNames.join(','), 'return function(i){return ' + checks.join('&&') + '}').apply(0, rules);
}

// requires testFor() and slice()
// creates where(), someWhere(), everyWhere(), noWhere(), and notEveryWhere()
var where, someWhere, everyWhere, noWhere, notEveryWhere;
Function(
  'A,T,S',
  'w@filter#};};someW@some#};};everyW@every#};};noW@some#===!1};};notEveryW@every#===!1};};'
    .replace(/@/g, 'here=function(a){var t=T.apply(0,S(arguments,1));if(a==void 0)return function(a){return A.')
    .replace(/#/g, '.call(a,t)')
    .replace(/\{([^\{]+?)\};/g, '$&$1')
)(__EMPTY_ARRAY, testFor, slice);

// requires testFor() and slice()
// creates findWhere(), indexWhere(), indicesWhere(), lastWhere(), and lastIndexWhere()
// NOTE: Allows for partial calls by providing undefined or null as the first parameter.
var findWhere, indexWhere, indicesWhere, lastWhere, lastIndexWhere;
Function(
  'T,S',
  'findZYXi]))Wa[i]VindexZYXi]))Wi;W-1VindicesZ,s=[]YXi]))s.push(i);WsVlastZ;l--;Xl]))Wa[l]VlastIndexZ;l--;Xl]))break;WlV'
    .replace(/[V-Z]/g, function (c) {
      return {
        Z: 'Where=function(a){var t=T.apply(0,S(arguments,1));if(a==void 0)return function(a){for(var l=a.length',
        Y: ',i=0;i<l;i++',
        X: ')if(t(a[',
        W: 'return ',
        V: '};};'
      }[c];
    })
    .replace(/\{([^\{]+?)\};/g, '$&$1')
)(testFor, slice);
