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

// YourJS.translate()
// https://www.yourjs.com/console/?gist=63781eadb826a776a42c3221d6cb49cd&file=YourJS.translate.js

// Takes an HTML string and turns it into a regular string by removing
// tags and converting HTML entities into their corresponding characters.
var unhtmlify;
(function(div) {
  unhtmlify = function(strHTML) {
    div.innerHTML = strHTML;
    return div.textContent || div.innerText;
  }
})(document.createElement('DIV'));
