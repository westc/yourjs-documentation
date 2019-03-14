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

// modDate(new Date, { month: 1 });  // Offsets date by 1 year in the future.
// modDate(new Date, { year: -1 });  // Offsets date by 1 year ago.
// modDate(new Date, { ms: -143 });  // Offsets date by -143 milliseconds.
// modDate(new Date, { $hour: 8 });  // Sets hour to 8am.



// Updates replaceMany() function to allow opt_limit to be negative.
function replaceMany(subject, target, replacement, opt_limit) {
  var arr = subject.split(target);
  var first = arr.slice(
    0,
    opt_limit = opt_limit == undefined ? Infinity : opt_limit < 0 ? ~~opt_limit - 1 : ~~opt_limit
  );
  var rest = arr.slice(opt_limit);
  return first.join(replacement) + ((0 in first && 0 in rest) ? replacement : '') + rest.join(target + '');
}
