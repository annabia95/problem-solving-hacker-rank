function compareTriplets(a, b) {
  let aliceScore = 0;
  let bobScore = 0;
  let arrScore = [];
  for (let index = 0; index < a.length; index += 1){
    if (a[index] > b [index]) {
      aliceScore += 1;
    }
    else if (b[index] > a[index]) {
      bobScore += 1
    }
  }
  arrScore.push(aliceScore, bobScore);
  return arrScore;
}

console.log(compareTriplets([5,6,7], [3,6,10]));