function libraryFine(d1, m1, y1, d2, m2, y2) {
  // Write your code here
  let fine = 0;
  if(d1 <= d2 && m1 === m2 && y1 === y2) {
    fine = 0;
  }
  if(d1 > d2 && m1 === m2 && y1 === y2) {
    fine = 15 * (d1 - d2);
  }
  if(m1 > m2 && y1 === y2) {
    fine = 500 * (m1 - m2);
  }
  if(y1 > y2) {
    fine = 10000;
  }

return fine;
}
console.log(libraryFine(14,7,2018,5,7,2018));
console.log(libraryFine(9,6,2015,6,6,2015));