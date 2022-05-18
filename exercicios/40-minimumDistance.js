function minimumDistances(a) {
  let minimumDistance = [];
  for(let index = 0; index < a.length; index +=1) {
    for(let index2 = index +1; index2 <  a.length; index2 +=1)
    if(a[index] === a[index2]) {
      minimumDistance.push((Math.abs(index-index2)));
    }
  }
  return minimumDistance.length === 0 ? -1 : Math.min(...minimumDistance);
}

console.log(minimumDistances([3,2,1,2,3]));
console.log(minimumDistances([7, 1, 3, 4, 1, 7]));
console.log(minimumDistances([1, 2, 3, 4, 5, 6]));