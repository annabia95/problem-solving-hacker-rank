function simpleArraySum(ar) {
  let sum = 0;
  for(let index = 0; index < ar.length; index +=1 ) {
    sum = sum + ar[index];
  }
  return sum;
}

console.log(simpleArraySum([1,2,3,4]));

/* Simple way: */

console.log([0, 1, 2, 3, 4].reduce( (accum, curr) => accum + curr ));