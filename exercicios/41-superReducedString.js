function superReducedString(s) {
  // Write your code here
  let arr = s.split('');
  for(let index = 0; index < arr.length; index +=1){
      if(arr[index] === arr[index + 1]) {
        arr.splice(index, 2);
        index = -1
      }
  }
return arr.length === 0 ? 'Empty String' : arr.join('');
}

console.log(superReducedString('aab'))