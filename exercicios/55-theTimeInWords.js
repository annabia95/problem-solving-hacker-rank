function intToEnglish(number) {

  var NS = [
    { value: 10000000, str: "Crore" },
    { value: 100000, str: "Lakh" },
    { value: 1000, str: "Thousand" },
    { value: 100, str: "Hundred" },
    { value: 90, str: "Ninety" },
    { value: 80, str: "Eighty" },
    { value: 70, str: "Seventy" },
    { value: 60, str: "Sixty" },
    { value: 50, str: "Fifty" },
    { value: 40, str: "Forty" },
    { value: 30, str: "Thirty" },
    { value: 20, str: "Twenty" },
    { value: 19, str: "Nineteen" },
    { value: 18, str: "Eighteen" },
    { value: 17, str: "Seventeen" },
    { value: 16, str: "Sixteen" },
    { value: 15, str: "Fifteen" },
    { value: 14, str: "Fourteen" },
    { value: 13, str: "Thirteen" },
    { value: 12, str: "Twelve" },
    { value: 11, str: "Eleven" },
    { value: 10, str: "Ten" },
    { value: 9, str: "Nine" },
    { value: 8, str: "Eight" },
    { value: 7, str: "Seven" },
    { value: 6, str: "Six" },
    { value: 5, str: "Five" },
    { value: 4, str: "Four" },
    { value: 3, str: "Three" },
    { value: 2, str: "Two" },
    { value: 1, str: "One" }
  ];

  var result = '';
  for (var n of NS) {
    if (number >= n.value) {
      if (number <= 99) {
        result += n.str;
        number -= n.value;
        if (number > 0) result += ' ';
      } else {
        var t = Math.floor(number / n.value);
        // console.log(t);
        var d = number % n.value;
        if (d > 0) {
          return intToEnglish(t) + ' ' + n.str + ' ' + intToEnglish(d);
        } else {
          return intToEnglish(t) + ' ' + n.str;
        }

      }
    }
  }
  return result;
}

function timeInWords(h, m) {
  let numberString =  intToEnglish(h);
  if (m === 0) {
    return  (`${numberString} o' clock`).toLowerCase();
  }
  if(m >= 1 && m <= 30) {
      if(m === 1){
        let oneMinuteString = intToEnglish(m);
        return (`${oneMinuteString} minute past ${numberString}`).toLowerCase();
      } 
      if(m === 15){
        return (`quarter past ${numberString}`).toLowerCase();
      }
      if(m === 30){
        return (`half past ${numberString}`).toLowerCase();
      } else {
        let minutesString = intToEnglish(m);
        return (`${minutesString} minutes past ${numberString}`).toLowerCase();
      }
  } else {
    let minutes = 60 - m
    let nextHour = intToEnglish(h + 1);
    if(minutes === 15) {
      return (`quarter to ${nextHour}`).toLowerCase();
    } 
    if(minutes === 1) {
      return (`${minutes} minute to ${nextHour}`).toLowerCase();
    }
    else {
      let restMinutes = intToEnglish(minutes);
      return (`${restMinutes} minutes to ${nextHour}`).toLowerCase();
    }
  }
}

console.log(timeInWords(5,0));

console.log(timeInWords(5,45));

console.log(timeInWords(5,47));

console.log(timeInWords(5,13));

console.log(timeInWords(5,28));

console.log(timeInWords(5,1));
