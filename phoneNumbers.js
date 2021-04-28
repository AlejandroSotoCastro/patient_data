const patients = require("./patients");


// map executes the callback function for each element
const phoneNumbers = patients.map(function(patient){

  return patient.phoneNumber;


})

console.log(phoneNumbers);