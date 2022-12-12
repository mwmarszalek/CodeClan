
var value = sayHello('Good day');
// console.log(value);

// console.log(myVar);
var myVar = 123;


// FUNCTION DECLARATION (NAMED FUNCTIONS) IS ALWAYS EXECUTED AT THE TOP EVEN IF ITS AT THE BOTTOM
function sayHello(salutation,greetingName="World") { 
    return `${salutation} ${greetingName}`;
}


console.log(add(1,2)); 


// FUNCTION EXPRESSION
var add = function addFunction (firstNum,secondNum) { 
    return firstNum + secondNum;
}

// ANONYMOUS FUNCTION EXPRESSION
var substract = function (firstNum,secondNum) { 
    return firstNum - secondNum;
}

// ARROW FUNCTION
var addArrowFunc = (firstNum,secondNum) => {
    return firstNum + secondNum;
}
