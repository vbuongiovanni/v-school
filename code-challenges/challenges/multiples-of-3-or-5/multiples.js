const multiples = (number) => {
  if (number > 0) {
    return Array(Math.abs(number) - 1)
        .fill()
        .map((element, index) => (index + 1))
        .reduce((prev, curr) => prev + ((curr % 3) === 0 || (curr % 5) === 0 ? curr : 0)
          , 0)
  } else {
    return 0;
  }
}
module.exports = multiples;