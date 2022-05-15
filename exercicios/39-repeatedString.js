
function repeatedString(s, n) {
  let fracNumber = Math.trunc(n / s.length);
  let reminder = n % s.length;
  let counter = 0;

  for (let index = 0; index < s.length; index++) {
      if (s[index] === 'a') {
          counter++;
      }
  }
  counter = counter * fracNumber;
  for (let index = 0; index < reminder; index++) {
      if (s[index] === 'a') {
          counter++;
      }
  }
  return counter;
}

console.log(repeatedString('d',590826798023))


