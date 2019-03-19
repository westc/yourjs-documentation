// requires has(...)
function ensureAt(root, path, opt_value) {
  for (var k, o = root, i = 0, l = o == undefined ? i : path.length, m = l - 1; i < l; i++) {
    o = has(o, k = path[i])
      ? o[k]
      : (o[k] = i === m ? opt_value : {});
  }
  return root;
}

// Update the documentation for set(...) to include the 4th parameter (opt_returnObj)
