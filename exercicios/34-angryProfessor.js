function angryProfessor(k, a) {
  // Write your code here
  let sum = 0

  for(let index = 0; index < a.length; index +=1 ){
    if(a[index] <= 0){
      sum += 1 
    }
  }
  if( sum >= k ) {
    return'NO';
  } else {
    return'YES';
  }

}
angryProfessor(3, [-1, -3, 4, 2])
angryProfessor(2, [0, -1, 2, 1])