const { map, forEach } = require("./patients");
const patients = require("./patients");
// hardcoding age 65 for now, we can make this dynamic later
let height = parseFloat(process.argv[2]);

const patientsTallerThan = patients.filter(function(patient) {
  //console.log("WHAT IS PATIENT?", patient);
  if (patient.height > height){
       height=patient.height;
      return true ;
     
  }
  else {

    return false;
  }
 
  
});
console.time("Tallest Test");
console.log(`Tallest person is: ${height} m tall:`);
console.log(patientsTallerThan.pop());
console.timeEnd("Tallest Test");


height=1.0
patients.forEach(element => {

  if (element.height>height) height=element.height

});

console.time("Foreach Test");
console.log(height);
console.timeEnd("Foreach Test");


