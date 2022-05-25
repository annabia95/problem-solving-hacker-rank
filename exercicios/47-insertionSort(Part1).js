function insertionSort1(n, arr) {
  for (let i = 1; i < arr.length; i += 1) {
      let current = arr[i];
      let j = i-1; 
      while ((j > -1) && (current < arr[j])) {
          arr[j+1] = arr[j];
          j--;
          console.log(...arr);
      }
      arr[j+1] = current;
  }
console.log(...arr);
}
