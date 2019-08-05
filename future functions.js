// requires has()
// Modifies keys of an object or augments the object with more keys for the same values.
function rekey(obj, keyMap, opt_keepOriginals) {
  obj = Object(obj);
  // Allow for partial call...
  if (obj == undefined) {
    return function(obj) {
      return rekey(obj, keyMap, opt_keepOriginals);
    };
  }

  var newObj = {};
  var excludedOriginals = [];
  (
    Array.isArray(keyMap)
      ? keyMap
      : Object.keys(keyMap).map(function (key) {
          return [key, keyMap[key]];
        })
  ).forEach(function (pair) {
    var oldKey = pair[0];
    var oldKeyType = typeof oldKey;
    var testId = oldKeyType === 'function' ? 1 : 'string,boolean,number'.indexOf(oldKeyType) >= 0 ? 2 : 0;
    var newKey = pair[1];
    for (var keyInObj in obj) {
      if (has(obj, keyInObj)) {
        if (testId ? testId === 1 ? oldKey(keyInObj) != undefined : oldKey == keyInObj : oldKey.test(keyInObj)) {
          newObj[keyInObj.replace(testId ? /^[^]*$/ : oldKey, newKey)] = obj[keyInObj];
          if (!opt_keepOriginals) {
            excludedOriginals.push(keyInObj);
          }
        }
      }
    }
  });
  for (var keyInObj in obj) {
    if (has(obj, keyInObj) && excludedOriginals.indexOf(keyInObj) < 0 && !has(newObj, keyInObj)) {
      newObj[keyInObj] = obj[keyInObj];
    }
  }
  return newObj;
}


// Update this to allow for setting of DOW, min, and sec
var modDate;
(function (MAP) {
  modDate = function (date, objOffsets) {
    for (var setter, getter, isSetOnly, k, v, keys = Object.keys(objOffsets), i = keys.length; i--;) {
      v = objOffsets[k = keys[i]];
      isSetOnly = /^\$/.test(k);
      k.replace(/^\$|\b(ms)$|s$/g, '$1')
        .replace(/^((milli)?sec(ond)?|min(ute)?|hour)$/, '$&s')
        .replace(/./, function (a) { return a.toUpperCase(); })
        .replace(/^(DOW|dow)([0-6])?$|^.+$/i, function (k, dow, offset) {
          if (dow) {
            dow = (date.getDay() + -(offset || 0) + 7) % 7;
            v = ((v % 7) + 7) % 7;
            date.setDate(date.getDate() + (isSetOnly ? v - dow : ((dow + v) % 7 - dow)));
          }
          else {
            k = MAP[k] || k;
            if ('function' === typeof date[setter = 'set' + k] && 'function' === typeof date[getter = 'get' + k]) {
              date[setter](!isSetOnly ? date[getter]() + v : v);
            }
          }
        });
    }
    return date;
  };
})({ Ms: 'Milliseconds', Day: 'Date', Year: 'FullYear', Secs: 'Seconds', Mins: 'Minutes' });
