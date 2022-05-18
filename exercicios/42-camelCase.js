function camelcase(s) {
  // Write your code here
  let arr = s.split(/(?=[A-Z])/);
  return arr.length;
}

console.log(camelcase('saveChangesInTheEditor'));