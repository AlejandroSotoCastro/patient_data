// patientByEmail.js
const patients = require("./patients");
const email = "radolthineg@mayoclinic.com";

const input= process.argv[2];

email =input;


let specificPatient= patients.find(function(patient){

    //return email===input;
    return email===patient.email;
}); // your logic here

console.log(specificPatient=== undefined? "Sorry, does not exist":specificPatient);