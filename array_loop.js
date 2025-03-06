// Array -  is a data structure used to store multiple values in a single variable

// Object - is a collection of key values

const students = ["Enoch", "Dylan", "Faustin","Mudalib","Brian","Sarah"]

const student = {
    firstName: "Enoch",
    grade: 98,
    pass: true
}

// Adding elements to an array(Methods)
// .push() // end of an array

// .unshift() // Add elements at the start of an array

// Removing elements from an array
// .pop() // removes the last element in an array
// console.log(students);
// students.pop()
// console.log(students);

// .shift() // removes the first element in an array


// Loop is used to repeatedly execute a block of code until a certain condition is met

// Syntax of a for loop

// for (initialization; condition; increment/Decrement) {
//      // block of code 
// }

// i++ // increment operator
// i-- // decrement operator

for (let i = 5; i >= -20; i-- ) {
    console.log("Iteration number:" + i);
}



for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}
