function closestNumbers(arr) {
  // Write your code here
 arr.sort((a,b) => a-b);
 let result = [];
 let minDiff = arr[2] - arr [0];
 for (let index =2 ; index < arr.length; index +=1) {
   minDiff = Math.min(minDiff, arr[index]  - arr [index -1]);
 }
 for (let index = 1; index < arr.length; index +=1) {
   if(arr[index] - arr[index -1] === minDiff){
     result.push(arr[index -1], arr[index]);
   }
}
return result;
}
