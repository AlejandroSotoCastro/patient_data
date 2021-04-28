const patients = require("./patients");
// Dynamic data using argv
// We have to convert the input to a number so we use parseInt
// run like this $ node patientById.js 2412
const id = parseInt(process.argv[2]);

const specificPatient = patients.find(function(patient) {
//   console.log("WHAT IS PATIENT?", patient);
  return id === patient.id
});

console.log(specificPatient === undefined ? `Patient with id: ${id}, not found` : "OUTPUT:", specificPatient);


