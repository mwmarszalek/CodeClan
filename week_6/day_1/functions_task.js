// 1. declare a named function that takes an array of numbers as an argument
// and returns the sum (total) of all numbers in the array

// 2. write an anonymous function expression that takes two arguments:
// - an object
// - a string
// and return truw if string is present as a key in the objecy
// otherwise false


function myFunc(nums) {
    var total = 0
    for (var num of nums) {
        total += num
    }
    return total
   
}

console.log(myFunc([1,2,3,4]));




var stringPresent = function (string,object) {
    //loop through object and return true if string is present. else false

    for (var key in object) {
        if(key === string) {
            return true;
        }
    }
    return false;
}

var person = {
    name: 'Ben', 
    colour: 'green'
};

var key = 'name';
var wasPresent = stringPresent(key,person);

console.log(wasPresent)

