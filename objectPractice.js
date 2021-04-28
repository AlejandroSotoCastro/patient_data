const patients = require("./patients");
const firstPatient = patients[0];

// DIY's
// 1. assign the weight, age and height of the firstPatient to variables weight, age and height

const {weight,age,height} = firstPatient;
console.log(firstPatient, `weight is ${weight},age is ${age},height is ${height}`);   


// 2. declare a variable fullName and assign it to the firstName and lastName of the firstPatient

const fullName = firstPatient.firstName +" " +firstPatient.lastName;
console.log(fullName)


// 3. if the firstPatient does not exercise, console.log: "does not exercise" else console.log: "this patient exercises"

if (firstPatient.dailyExercise === 'no') {

    console.log("does not wxercise")
}
else {

    console.log("this patient exercises")
}   