function plusMinus(arr) {
  let ratioZero = 0;
  let sumRatioZero = 0;
  let ratioPositive = 0;
  let sumRatioPositive = 0;
  let ratioNegative = 0;
  let sumRatioNegative = 0;
  for (let index = 0; index < arr. length ; index +=1 ){
    if(arr[index] < 0) {
      ratioNegative +=1;
    }
    if(arr[index] > 0) {
      ratioPositive +=1;
    } else if (arr[index] === 0){
      ratioZero += 1;
    }
  }
  sumRatioNegative = (ratioNegative/arr.length).toFixed(6);
  sumRatioPositive = (ratioPositive/arr.length).toFixed(6);
  sumRatioZero = (ratioZero/arr.length).toFixed(6);
  console.log(sumRatioPositive);
  console.log(sumRatioNegative);
  console.log(sumRatioZero);
}

console.log(plusMinus([0, 0, -1, 1, 1]));