function round5(x)
{
    return Math.ceil(x/5)*5;
}

console.log(round5(73));

function gradingStudents(grades) {
  let finalGrades= [];

  grades.forEach((grade) => {
    if((Math.ceil(grade/5)*5 - grade) < 3 && grade >= 38) {
      finalGrades.push(Math.ceil(grade/5)*5)
    } else {
      finalGrades.push(grade);
    }
  })
  return finalGrades;
}

console.log(gradingStudents([73,67,38,33]));