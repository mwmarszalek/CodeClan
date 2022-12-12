// FUNCTION DECLARATION (NAMED FUNCTIONS)
function sayHello(salutation,greetingName="World") { 
    return `${salutation} ${greetingName}`;
}


// FUNCTION EXPRESSION
var add = function addFunction (firstNum,secondNum) { 
    return firstNum + secondNum;
}

// ARROW FUNCTION
var addArrowFunc = (firstNum,secondNum) => {
    return firstNum + secondNum;
}

//ARROW FUNCTION (ONE LINER)
var addArrowFunc = (firstNum,secondNum) => firstNum + secondNum;


var result = addArrowFunc(1,2);
console.log(result);