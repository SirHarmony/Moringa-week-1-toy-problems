//Speed limit stored in a variable
const speedLimit = 70;
const speed = prompt("Please Enter The Car Speed", 0);

//Function declaration that takes the speed of a car as an argument
function speedDetector(carSpeed) {
  //Storing the excess speed above 70 in a variable
  const excessSpeed = carSpeed - speedLimit;
  //Declaring the demerit points variable
  let demeritPoint;
  //Reassigning the points for every difference of 5
  demeritPoint = Math.floor(excessSpeed / 5);

  //If else if block to check for the conditions that satisfy our criteria

  //1. If car speed input is less than zero, return immediately and do nothing
  if (carSpeed < 0) {
    console.log("Enter Valid Car Speed");

    //2. If the car speed is less than the speed limit, print string 'Ok'
  } else if (carSpeed <= 70) {
    console.log("Ok");

    //3. If car speed is more than the speed limit but the driver hasn't began accumulating demerit points, give them a warning that they have exceeded the speed limit
  } else if (carSpeed > 70 && demeritPoint === 0) {
    console.log(`Warning: You've Exceeded the Speed Limit`);

    //4. If the car speed is above the speed limit and the driver has accumulated points less 12, print out the template literal with the points
  } else if (carSpeed > 70 && demeritPoint <= 12) {
    console.log(`Points: ${demeritPoint}`);

    //5. If the demerit points are more than twelve, prin out the string 'Licence suspended'
  } else if (demeritPoint > 12) {
    console.log(`License suspended`);
  }
}

//Function call to  test out our program with argument passed in
speedDetector(speed);
