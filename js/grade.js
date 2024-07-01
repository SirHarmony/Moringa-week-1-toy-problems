//Function declaration that takes the student marks as an argument, stored in the studentMarks parameter
function generateGrade(studentMarks) {
  //Initializing the grade that will be dynamically set depending on the marks input
  let grade;

  //if else if statement that dynamically sets the grade based on the input
  if (studentMarks > 79 && studentMarks <= 100) {
    grade = "A";
  } else if (studentMarks >= 60 && studentMarks <= 79) {
    grade = "B";
  } else if (studentMarks >= 50 && studentMarks <= 59) {
    grade = "C";
  } else if (studentMarks >= 40 && studentMarks <= 49) {
    grade = "D";
  } else if (studentMarks < 40 && studentMarks >= 0) {
    grade = "E";
  } else if (studentMarks < 0 || studentMarks > 100) {
    grade = "Error: Input student marks between 0 and 100";
  }
  // console.log(`Student's grade: ${grade}`);
  //Function returns student's grade as a template literal
  return `Student's grade: ${grade}`;
}

//As you call the function, input the student marks as a number between 0(minimum) and 100(maximum)
generateGrade(88);
