// only should work for something like the following:
//   JS.only(o, (k, v) => v != undefined)
// The above would essentially create a new object with all of the key-value pairs where the value is not null or undefined

// Scales a number using minIn to maxIn as the input range and minOut and maxOut
// as the corresponding return values range.
function scale(input, minIn, maxIn, minOut, maxOut) {
  return (input - minIn) * (maxOut - minOut) / (maxIn - minIn) + minOut;
}

// Specifies whether or not the number is negative (meaning it has a bit
// indicating the sign of the number).
function signbit(x) {
  return x < 0 || 1 / x < 0;
}

// Replaces all of the instances of a target substring in subject with a
// replacement string.  Gives the option to limit how many replacements occur.
function replaceAll(subject, target, replacement, opt_limit) {
  // reusing opt_limit to allow code to be minified even more by avoiding
  // declaring an additional variable.
  opt_limit = subject.split(
    target = target + '',
    (opt_limit == undefined || opt_limit === Infinity) ? undefined : opt_limit >= 1 ? +opt_limit + 1 : 1
  );
  opt_limit[opt_limit.length - 1] += subject.slice(opt_limit.join(target).length);
  return opt_limit.join(replacement);
}
