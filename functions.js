// What is a function
// Block of code used to perform specific tasks

// Sytanx of function
function nameOfFunc () {

}

// Types of functions
// Named functions

function sayHello(parameter) {
    console.log("Hello Class")
}
// call the function
sayHello();

// Arrow function
const declareHello = () => {
    console.log("Hello Class")
} 

declareHello();


const greet = () => console.log("Hello Students")

greet()


// Anonymous Functions
const waveHello = function () {
    console.log("Hello Everyone")
}
waveHello();


// Higher Order Function - function that can take one or more functions as arguments
function hello(){
    console.log('Hey everyone!');
  }
  
  // Higher Order Function Example:
  function higherOrderFnExample(functionToExecute){
  
    console.log('I can do anything!');
  
    functionToExecute()
  }
  
  higherOrderFnExample(hello);


// Callback function

// A function can accept another function as a parameter.
// Callbacks allow one function to call another at a later time.
// A callback function can execute after another function has finished
function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
}

function sayBye() {
    console.log("Goodbye!");
}

greet("Ajay", sayBye);