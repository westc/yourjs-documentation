// Modifies a date object with either offsets or specific times.
var modDate;
(function(MAP) {
  modDate = function(date, objOffsets) {
    for (var setter, getter, isSetOnly, k, v, keys = Object.keys(objOffsets), i = keys.length; i--; ) {
      v = objOffsets[k = keys[i]];
      isSetOnly = /^\$/.test(k);
      k = k.replace(/^\$|\b(ms)$|s$/g, '$1').replace(/^((milli)?second|minute|hour)$/, '$&s').replace(/./, function(a) { return a.toUpperCase(); });
      k = MAP[k] || k;
      if ('function' === typeof date[setter = 'set' + k] && 'function' === typeof date[getter = 'get' + k]) {
        date[setter](!isSetOnly ? date[getter]() + v : v);
      }
    }
    return date;
  };
})({ Ms: 'Milliseconds', Day: 'Date', Year: 'FullYear' });

// modDate(new Date, { month: 1 });  // Offsets date by 1 month in the future.
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



// Updates for matchAll() and execAll() so they can handle regular expressions like /(?:)/
eval('exec:a,fmatch:f,a'.replace(/(\w+):(.,.)/g, 'function $1All($2,d){a=new RegExp(a.source,(a.flags||(a+"").replace(/[^]+\\//,"")).replace("g","")+"g");for(var b,g=0,c=[],e=0;b=a.exec(f);e===a.lastIndex&&++a.lastIndex,e=a.lastIndex)d&&(b=d(b,++g)),void 0!==b&&c.push(b);return c.length?c:null}'));




// Updates for debounce() and throttle()
// For both functions the first parameter is the function and the second is the amount of time to wait.
// For debounce() the 3rd parameter (opt_initialAndAfter):
// - True indicates that the function should run immediately and again after the allotted time has
//   passed if the function is called multiple times.
// - False indicates that the function should only be run on the intial call if the allotted time
//   has passed since the previous call.
// - If nothing is supplied or null or undefined then the function will only be called after the
//   allotted amount of time has passed.
// For throttle() the 3rd parameter (opt_leading):
// - True indicates that the function should run immediately.  If called multiple times before the
//   time has elapsed it will not be called again.
// - False indicates that the function should only be run after the time has elapsed (not the initial
//   call).
// - If nothing is supplied or null or undefined then the function will be called on the initial and
//   if called multiple times before the time elapses the final call will occur after the specified
//   time has passed from the previous execution.
eval('debounce231k=b;b=@;##b-k##@-b#throttle312#k=@,#k-b#b=k,#k-b#'.replace(
  /(\D+)(.)(.)(.)([^#]*)#([^#]*)#([^#]*)#([^#]*)#([^#]*)#/g,
  'function $1(h,c,a){var u,d,e,f,g,k,b=0;a=u==a?$2:a?$3:$4;return function(){d=0;e=arguments;f=this;$5a&1&&($6d=$7>=c)&&($8g=h.apply(f,e));!d&&a&2&&setTimeout(function(){k=@,k-b>=c&&(b=k,g=h.apply(f,e))},c);return g}}'
).replace(/@/g, '+new Date'));
