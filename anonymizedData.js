const patients = require("./patients");
// console.log(patients);

// map executes a callback for each element in the array
const anonymizedData = patients.map(function(patient) {
  // return an object with id and age, it gets added to the output array

  const {id, age, gender,height,weight,dailyExercise }=patient;
  return {
    id: id,
    age: age,
    gender: gender,
    height:height,
    weight:weight,
    dailyExercise:dailyExercise,
  };
});

console.log(anonymizedData);


