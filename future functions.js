// Converts any value into a boolean, including "no" and "off" which could be passed via forms.
function toBool(value) {
  return!/^(no|off|false|0|)$/i.test((value || '') + '');
}

// Takes an object and turns it into a serialized URL parameter string.
// The opt_formatter is an optional parameter that can be used to format the values that will be displayed for each value in `obj`.
// require escape(), flattenKeys() and has()
// var { escape, flattenKeys, has } = YourJS;
function toParams(obj, opt_formatter) {
  var encodedKey, encodedValue, k, parts = [];
  obj = flattenKeys(obj);
  for (k in obj) {
    if (has(obj, k)) {
      encodedKey = escape(('.' + k).replace(
        /\.((?:[^\\\.]+|\\.)*)/g,
        function(match, name, i) {
          if (/(^|\\)\[|\]/.test(name)) {
            name = name.replace(/\[|\]/g, '\\$&');
          }
          if (i) {
            name = '[' + name + ']';
          }
          return name;
        }
      ));
      encodedValue = obj[k];
      encodedValue = escape(
        opt_formatter
          ? opt_formatter(encodedValue, k.match(/(?:[^\\]+|\\.)+/g).map(function(k) { return k.replace(/\\(.)/g, '$1'); }))
          : encodedValue != undefined
            ? nativeType(encodedValue) !== 'Date'
              ? encodedValue + ''
              : encodedValue.toJSON()
            : ''
      );
      parts.push(encodedKey + '=' + encodedValue);
    }
  }
  return parts.join('&');
}

// Takes a serialized URL parameter string and turns it into an object.
// The opt_parser is an optional parameter that can be used to parse each value found in `str`.
// require unescape(), nativeType() and has()
// var { unescape, nativeType, has } = YourJS;
function fromParams(str, opt_parser) {
  var result = {};
  str.replace(
    /([^&=]+)(?:=([^&]*))?/g,
    function(match, key, value) {
      var base = result;
      value = unescape(value);

      if (!opt_parser) {
        value = /^-?\d+(\.\d+)?$/.test(value)
          ? +value
          : value === 'true'
            ? true
            : value === 'false'
              ? false
              : /^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d.\d{3}Z$/.test(value)
                ? new Date(value)
                : value;
      }
      unescape(key)
        .match(/(^(?:[^\[\]\\]+|\\.)+)|\[((?:[^\[\]\\]+|\\.)+)\]/g)
        .forEach(function (key, index, keys) {
          key = (index ? key.slice(1, -1) : key).replace(/\\(.)/g, '$1');
          if (keys.length - 1 === index) {
            base[key] = opt_parser
              ? opt_parser(value, keys)
              : value;
          }
          else if (has(base, key)) {
            base = base[key];
          }
          else {
            base[key] = base = {};
          }
        });
    }
  );
  return result;
}
