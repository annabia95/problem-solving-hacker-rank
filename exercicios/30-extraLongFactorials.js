
function extraLongFactorials(n) {
  // Write your code here
  n = BigInt(n);
  let num = BigInt(1)
  for (var i = n; i > 1; i--) {
    num *= i;
  }
  console.log(num.toString());

}

extraLongFactorials(45);