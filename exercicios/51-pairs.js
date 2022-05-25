function pairs(k, arr) {
  // Write your code here
  let pairs = 0;
  arr.sort((a,b) => a - b );
  for(let index = 0; index < arr.length; index +=1) {
    for(let index2 = index + 1; index2 < arr.length; index2 +=1){
      if(Math.abs(arr[index] - arr [index2]) === k) {
        pairs += 1;
      }
    }

  }
  return pairs;
}

console.log(pairs(2, [1, 5, 3, 4, 2]));
console.log(pairs(1, [1, 2, 3, 4]));
