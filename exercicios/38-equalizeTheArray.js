function equalizeArray(arr) {
  // Write your code here
  let count= {};
  let array = [];
  let minValue= [];

  arr.forEach(element => {
    count[element] = (count[element] || 0) + 1;
  });


  array = Object.keys(count)
    .map(function(key) {
        return count[key];
    });

  minValue = Math.abs((Math.max(...array) - arr.length));

return minValue;

}

console.log(equalizeArray([3, 3, 2, 1, 3]));