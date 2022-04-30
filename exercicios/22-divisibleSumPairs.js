function divisibleSumPairs(n, k, ar) {
  // Write your code here
  let numberOfPairs = 0;

    for(let index1 = 0; index1 < n; index1 += 1){
      for(let index2 = 0; index2 < n; index2 +=1){
        if(index1 < index2){
          if((ar[index1] + ar[index2]) % k === 0) {
          numberOfPairs += 1;
          }
        }
      }
    } 
    return numberOfPairs;
}

console.log(divisibleSumPairs(6,3,[1, 3, 2, 6, 1, 2]));
