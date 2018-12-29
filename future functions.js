function pacman(x, inclusive, exclusive) {
  exclusive -= inclusive;
  return ((x - inclusive) % exclusive + exclusive) % exclusive + inclusive;
}

// only should work for something like the following:
//   JS.only(o, (k, v) => v != undefined)
// The above would essentially create a new object with all of the key-value pairs where the value is not null or undefined
