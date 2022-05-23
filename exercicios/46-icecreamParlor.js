function icecreamParlor(m, arr) {
  // Write your code here
  let sum = 0;
  let result = [];
  for (let index  = 0; index < arr.length; index +=1) {
    sum = 0;
    for (let index2  = index + 1; index2 < arr.length; index2 +=1){
    sum = arr[index] + arr[index2];
      if(sum === m ) {
      result.push((index + 1),(index2 + 1));
      break
      }
    }
  }
  return result;
}

console.log(icecreamParlor(6, [1,3,4,5,6]))
console.log(icecreamParlor(4, [1, 4, 5, 3, 2]))
console.log(icecreamParlor(4, [2, 2, 4, 3]))