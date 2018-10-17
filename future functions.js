// requires mod()
// A number to a range which will loop if the value passed is below or above the limits.
function pacman(x, inclusiveLowerLimit, exclusiveUpperLimit) {
  return mod(x - inclusiveLowerLimit, exclusiveUpperLimit - inclusiveLowerLimit) + inclusiveLowerLimit;
}
