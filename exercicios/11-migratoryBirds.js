function migratoryBirds(arr) {
  const counts = {};
  arr.forEach((count) => { counts[count] = (counts[count] || 0) + 1;} );
  const maxValue = Math.max(...Object.values(counts));
  const numId = Object.keys(counts).find((key)=> counts[key] === maxValue);
  return numId;

}

console.log(migratoryBirds([1,2,3,4,5,4,3,2,1,3,4]));