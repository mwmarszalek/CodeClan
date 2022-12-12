var userName = 'John Doe';


var secretsFunction = function () {
    var pinCode = [0, 0 , 0 , 0]; // if we use var inside function it is only accesible inside that function
    console.log('pin code inside function: ',pinCode,'user was ',userName);

}


secretsFunction();
// console.log(pinCode);


// var filterNamesByFirstLetter = function (names,letter) {
//     var filteredNames = [];
//     for (let name of names) {
//         if (name[0] === letter) {
//             filteredNames.push(name);
//         }
//     }
//     console.log('name is now: ',name);
//     return filteredNames
// }

// var students = ['Alice','Bob','Arthur','Jane'];

// var filteredStudents = filterNamesByFirstLetter(students,'A');
// // console.log(filteredStudents)

let myVariable = 'asb';


let isItFive = function (number) {
    let result; 

    if (number === 5) {
        result = true;
    }
    return result
}

// LET is block scoped VAR is hoisted to the top (brings up)

// use CONST when your variable does not change, use LET when it might change