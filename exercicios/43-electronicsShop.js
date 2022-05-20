function getMoneySpent(keyboards, drives, b) {
  /*
   * Write your code here.
   */
  let arrPrices = [];
  let sum = 0;

  for (let index = 0; index < keyboards.length; index += 1) {
    sum = 0
    for (let index2 = 0; index2 < drives.length; index2 += 1) {
    sum = keyboards[index] + drives [index2]
      if(sum < b) {
        arrPrices.push(sum);
      }
    }
  }
return arrPrices.length === 0 ? -1 : Math.max(...arrPrices);
}

console.log(getMoneySpent([40,50,60], [5,8,12], 60));
console.log(getMoneySpent([3,1], [5,2,8], 10));
console.log(getMoneySpent([4], [5], 5));