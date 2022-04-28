function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  let numberOfApples = 0;
  let numberOfOranges = 0;
  let arrayAples = [];
  let arrayOranges = []
  var myArrayRange = [];
  for (let index = s; index <= t; index ++) {
      myArrayRange.push(index);
  }
  apples.forEach((e1) => {
    sumDistance = a + e1;
    arrayAples.push(a + e1);
  })
  oranges.forEach((e1) => {
    arrayOranges.push(b + e1);
  })
  myArrayRange.forEach((e1) => arrayAples.forEach((e2) => {
    if(e1 === e2){
      numberOfApples +=1;
    }
  }))
  myArrayRange.forEach((e1) => arrayOranges.forEach((e2) => {
    if(e1 === e2){
      numberOfOranges +=1;
    }
  }))
  console.log(numberOfApples);
  console.log(numberOfOranges);
}

countApplesAndOranges(7,10,4,12,[2,3,-4],[3,-2,-4])

/* let applesCount = 0;
let orangesCount = 0;

apples.forEach((apple) => {
  if((apple + a) >= s && (apple + a) <= t){
    applesCount += 1;
  }
});

oranges.forEach((orange) => {
  if((orange + b) <= t && (orange + b) >= s){
    orangesCount += 1;
  }
});

console.log(applesCount);
console.log(orangesCount); */