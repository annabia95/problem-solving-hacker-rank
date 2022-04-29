function birthdayCakeCandles(candles) {
  // Write your code here
  let maxValue = Math.max(...candles);
  let countMax = 0;
  candles.forEach((candle) => {
    if(candle === maxValue) {
      countMax +=1
    }
  })
  return countMax;
}

console.log(birthdayCakeCandles([3,2,1,3]));