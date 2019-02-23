// only should work for something like the following:
//   JS.only(o, (k, v) => v != undefined)
// The above would essentially create a new object with all of the key-value pairs where the value is not null or undefined

// Modifies a date object with either offsets or specific times.
var modDate;
(function(MAP) {
  modDate = function(date, objOffsets) {
    for (var setter, getter, isSetOnly, k, v, keys = Object.keys(objOffsets), i = keys.length; i--; ) {
      v = objOffsets[k = keys[i]];
      isSetOnly = /^\$/.test(k);
      k = k.replace(/^\$|s$/g, '').replace(/^((milli)?second|minute|hour)$/, '$&s').replace(/./, function(a) { return a.toUpperCase(); });
      k = MAP[k] || k;
      if ('function' === typeof date[setter = 'set' + k] && 'function' === typeof date[getter = 'get' + k]) {
        date[setter](!isSetOnly ? date[getter]() + v : v);
      }
    }
    return date;
  };
})({ Ms: 'Milliseconds', Day: 'Date', Year: 'FullYear' });
