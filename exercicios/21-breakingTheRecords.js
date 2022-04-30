function breakingRecords(scores) {
  // Write your code here
  var noRepeatNumbers = [...new Set(scores)];
  let arrayRecords = [];
  let sumMostRecords = 0;
  let sumLeastRecords = 0;
  let max = noRepeatNumbers[0];
  let min = noRepeatNumbers[0];

    for(let index = 0; index < noRepeatNumbers.length; index +=1 ){
      if (noRepeatNumbers[index] > max) {
        max = noRepeatNumbers[index]
        sumMostRecords += 1;
      } else if(noRepeatNumbers[index] < min ) {
        min = noRepeatNumbers[index];
        sumLeastRecords +=1
      }
  };
  arrayRecords.push(sumMostRecords, sumLeastRecords);
  return arrayRecords;
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));