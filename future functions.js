// Converts any value into a boolean, including "no" and "off" which could be passed via forms.
function toBool(value) {
  return!/^(no|off|false|0|)$/i.test((value || '') + '');
}
