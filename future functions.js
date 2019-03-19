// requires has(...)
function ensureAt(root, path, opt_value) {
  for (var k, o = root, i = 0, l = o == undefined ? i : path.length, m = l - 1; i < l; i++) {
    o = has(o, k = path[i])
      ? o[k]
      : (o[k] = i === m ? opt_value : {});
  }
  return root;
}

function flattenKeys(obj, opt_keyedObjects) {
  function recurse(base, path, keys, keysCount, ancestors) {
    for (var innerKeys, innerKeysCount, v, k, i = 0; i < keysCount; i++) {
      v = base[k = keys[i]];
      innerKeys = v ? getKeys(v) : [];
      if (ancestors.indexOf(v) < 0) {
        k = k.replace(/\./g, '\\.');
        if (innerKeysCount = innerKeys.length) {
          recurse(v, path + k + '.', innerKeys, innerKeysCount, ancestors.concat([v]));
        }
        if (opt_keyedObjects || !innerKeysCount) {
          result[path + k] = v;
        }
      }
    }
  }

  var getKeys = Object.keys, result = {}, keys = obj ? getKeys(obj) : [], keysCount = keys.length;
  if (keysCount) {
    recurse(obj, '', keys, keysCount, [obj]);
  }
  return result;
}

// Update the documentation for set(...) to include the 4th parameter (opt_returnObj)
