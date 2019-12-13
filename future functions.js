function pluck(array, path) {
  path = Array.isArray(path) ? path : [path];
  for (
    var pathPart,
        isNeg,
        item,
        i,
        itemCount,
        l = array.length,
        result = [],
        pathIndex = 0,
        pathCount = path.length;
    pathIndex < pathCount;
    pathIndex++
  ) {
    pathPart = path[pathIndex];
    isNeg = pathPart < 0 && 'number' === typeof pathPart;
    for (i = l; i--;) {
      item = array[i];
      result[i] = item != null
        ? item[(isNeg && isFinite(itemCount = item.length)) ? pathPart + itemCount : pathPart]
        : item;
    }
    array = result;
  }
  return result;
}
