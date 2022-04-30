function staircase(n) {
  let symbol = '#';
  let inputEmpty = '';
  let inputPosition = n - 1;
  for (let line = 0; line < n; line +=1 ){
    for(let column = 0; column < n; column +=1) {
      if(column < inputPosition){
        inputEmpty += ' ';
      } else {
        inputEmpty += symbol;
      }
    }
    console.log(inputEmpty);
    inputEmpty = '';
    inputPosition -= 1;
  }
}

staircase(5);