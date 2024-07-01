//Function declaration that takes the speed of a car as an argument

function netSalaryCalculator(basicSalary, benefits) {
  //Calculating gross salary
  const grossSalary = basicSalary + benefits;
  //Declaring the paye variable
  let paye;
  //Declaring the nhif variable
  let nhif;
  //NSSF contribution assuming employee is a tier one contributor
  const nssf = 720;

  //Calculating paye based on the gross salary
  if (grossSalary > 0 && grossSalary <= 24000) {
    paye = grossSalary * 0.1;
  } else if (grossSalary >= 24001 && grossSalary <= 32333) {
    paye = grossSalary * 0.25;
  } else if (grossSalary >= 32334 && grossSalary <= 500000) {
    paye = grossSalary * 0.3;
  } else if (grossSalary >= 500001 && grossSalary <= 800000) {
    paye = grossSalary * 0.325;
  } else if (grossSalary > 800000) {
    paye = grossSalary * 0.35;
  }
  // console.log(paye);

  //Calculating nhif based on the gross salary
  if (grossSalary > 0 && grossSalary <= 5999) {
    nhif = 150;
  } else if (grossSalary >= 6000 && grossSalary <= 7999) {
    nhif = 300;
  } else if (grossSalary >= 8000 && grossSalary <= 11999) {
    nhif = 400;
  } else if (grossSalary >= 12000 && grossSalary <= 14999) {
    nhif = 500;
  } else if (grossSalary >= 15000 && grossSalary <= 19999) {
    nhif = 600;
  } else if (grossSalary >= 20000 && grossSalary <= 24999) {
    nhif = 750;
  } else if (grossSalary >= 25000 && grossSalary <= 29999) {
    nhif = 850;
  } else if (grossSalary >= 30000 && grossSalary <= 34999) {
    nhif = 900;
  } else if (grossSalary >= 35000 && grossSalary <= 39999) {
    nhif = 950;
  } else if (grossSalary >= 40000 && grossSalary <= 44999) {
    nhif = 1000;
  } else if (grossSalary >= 45000 && grossSalary <= 49999) {
    nhif = 1100;
  } else if (grossSalary >= 50000 && grossSalary <= 59999) {
    nhif = 1200;
  } else if (grossSalary >= 60000 && grossSalary <= 69999) {
    nhif = 1300;
  } else if (grossSalary >= 70000 && grossSalary <= 79999) {
    nhif = 1400;
  } else if (grossSalary >= 80000 && grossSalary <= 89999) {
    nhif = 1500;
  } else if (grossSalary >= 90000 && grossSalary <= 99999) {
    nhif = 1600;
  } else if (grossSalary >= 100000) {
    nhif = 1700;
  }
  // console.log(nhif);
  const netSalary = grossSalary - paye - nhif - nssf;
  // console.log(netSalary);
  return netSalary;
}

netSalaryCalculator(50000, 1200);
