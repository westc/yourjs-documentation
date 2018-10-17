function pacman(x, inclusive, exclusive) {
  exclusive -= inclusive;
  return ((x - inclusive) % exclusive + exclusive) % exclusive + inclusive;
}
