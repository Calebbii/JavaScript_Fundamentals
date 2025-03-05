// Scope

// Global Scope & Local Scope

// Global scope
// var, let, const

// Local Scope - two types - Block & Function scope

// Global scope variables
var a = 5;
let b = 10;
const c = "Lee"

{
    // console.log(`Global Scope type ${a}`);
    // console.log(`Global Scope type ${b}`);
    // console.log(`Global Scope type ${c}`);
}

// syntax of a function
function nameOfFunc (age) {

}

function inspectScope () {
    console.log(`Global Scope type ${a}`);
    console.log(`Global Scope type ${b}`);
    console.log(`Global Scope type ${c}`);
}

inspectScope();

// Local block Scope annthing inside the {} - inaccessible from outside the block
{
    let student_one = "Steve"
    const student_two = "Laetitia"
    var students_number = 41
    console.log(`Block Scope ${student_one}`);
    console.log(`Block Scope ${student_two}`);
    console.log(`Block Scope ${students_number}`);
}

// Function Scope
function myFunc () {
    let last_name = "Cook"
    var car = "Audi"
    const age = 25

    console.log(last_name)
    console.log(car)
    console.log(age)
}
myFunc()