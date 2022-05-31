
function hackerrankInString(s) {
  // Write your code here
  let example = "hackerrank".split("");
  let input = s.split("");
  let j = 0;
  if(input.length < example.length){
     return "NO";
  }
  for(let index = 0; index < input.length; index++){
    if(input[index] === example[j]){
      j++
     }
  }
    return j === example.length ? "YES" : "NO";
}

console.log(hackerrankInString('hereiamstackerrank'));
console.log(hackerrankInString('hackerworld'));