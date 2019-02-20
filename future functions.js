// only should work for something like the following:
//   JS.only(o, (k, v) => v != undefined)
// The above would essentially create a new object with all of the key-value pairs where the value is not null or undefined

function scale(x, inLow, inHigh, outLow, outHigh) {
  return (x !== x || inLow !== inLow || inHigh !== inHigh || outLow !== outLow || outHigh !== outHigh)
    ? NaN
    : (x !== Infinity && x !== -Infinity)
      ? (x - inLow) * (outHigh - outLow) / (inHigh - inLow) + outLow
      : x;
}

function signbit(x) {
  return x < 0 || 1 / x < 0;
}

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
