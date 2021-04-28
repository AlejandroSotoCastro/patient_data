const patients = require("./patients.js")


const phoneNumber= "+352-734-320-0008"
const phoneNumber = process.argv[2];



const specificPatient=patients.find(function(patient){

    return phoneNumber===patient.phoneNumber;

})

console.log(specificPatient ===undefined? "Nope": specificPatient)