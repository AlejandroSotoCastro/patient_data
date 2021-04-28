const patients = require("./patients");


// map executes the callback function for each element
const id = patients.map(function(patient){

  return patient.id;


})

console.log(id);