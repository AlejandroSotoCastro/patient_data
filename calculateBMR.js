const patients = require('./patients.js');




function calculateBMR(weight, height, ageOfUser, genderOfUser) {
    const heightInCm = height * 100;
  
    let BMR;
  
    if (genderOfUser === "m") {
      BMR = 10 * weight + 6.25 * heightInCm - 5 * ageOfUser + 50;
    } else {
      BMR = 10 * weight + 6.25 * heightInCm - 5 * ageOfUser - 150;
    }
  
    return BMR;
  }

const BMR = patients.map(function(patient){
    const {weight, height, age, gender}=patient

   const bmr= calculateBMR(weight, height, age, gender)


    return `${patient.firstName}'s BMR is ${bmr}`; // return BMR for a patient here
    
})


console.log(BMR)

//holaaaaaaaaaaaaaa