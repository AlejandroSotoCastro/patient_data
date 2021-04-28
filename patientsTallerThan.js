const patients = require("./patients");
// hardcoding age 65 for now, we can make this dynamic later
const height = parseFloat(process.argv[2]);

const patientsTallerThan = patients.filter(function(patient) {
  //console.log("WHAT IS PATIENT?", patient);
  return patient.height > height;
 
  
});
console.log(patientsTallerThan==""? `Sorry, there are no patientns taller than ${height}`:"OUTPUT:",patientsTallerThan)
console.log("TOTAL NUMBER OF PATIENTS", patients.length);
console.log(`NUMBER OF PATIENTS OLDER THAN ${height}:`, patientsTallerThan.length);