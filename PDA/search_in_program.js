const numsList = [30, 48, 8, 120, 56];


const searchForNumber = (number) => {
    const found = numsList.find(element => element === number);
     
    if (found != number) {
        console.log("Number not found");
    } else {
        console.log(`Number ${number} found!`)
    }
}
searchForNumber(30)


