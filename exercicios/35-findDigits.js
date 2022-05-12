function findDigits(n) {
  // Write your code here
  let arrayOfStrings = (n.toString()).split();
  let lengthArray = arrayOfStrings[0].length;
  let sumDivisor = 0;

    for(let index = 0; index < lengthArray; index +=1) {
        if(Number(arrayOfStrings[0]) % Number(arrayOfStrings[0][index]) === 0 && Number(arrayOfStrings[0][index])!== 0){
          sumDivisor +=1;
        }
    }


 return sumDivisor;

}

console.log(findDigits(124));

console.log(findDigits(12));

console.log(findDigits(10));