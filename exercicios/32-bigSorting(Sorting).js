function bigSorting(unsorted) {
  // Write your code here

 unsorted.sort((a, b) => {
  if(a.length === b.length){
    return a > b ? 1 : -1;
  } return a.length - b.length;
 })
  return unsorted

}

console.log(bigSorting(['6', '31415926535897932384626433832795', '1', '3', '10']))
