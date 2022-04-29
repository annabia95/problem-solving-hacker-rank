function beautifulDays(i, j, k) {
  // Write your code here
  let myArrayRange = [];
  let numberBeatifulDays = 0;
  for (let index = i; index <= j; index ++) {
    myArrayRange.push(index);
}
  myArrayRange.forEach((number)=> {
    let rev = Number(String(number).split('').reverse().join(''));
      if(Math.abs(number-rev) % k === 0) {
        numberBeatifulDays +=1;
      }
  })
  return numberBeatifulDays;
}
console.log(beautifulDays(20,23,6));