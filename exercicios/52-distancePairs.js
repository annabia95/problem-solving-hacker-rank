function squares(a, b) {
  // Write your code here
  let sqrtA = Math.sqrt(a);
  let sqrtB = Math.sqrt(b);
  let square = Math.floor(sqrtB) - Math.ceil(sqrtA);
  return (square + 1);


}
console.log(squares(17,24));
squares(24,49)
squares(3,9)
