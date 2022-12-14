const Dinosaur = require("./dinosaur");


const Park = function(name,ticketPrice,dinosaurs) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = dinosaurs
}

// Functions go here

Park.prototype.addDinosaur = function(dinosaur) {
    this.dinosaurs.push(dinosaur)
}

Park.prototype.checkLength = function() {
    return this.dinosaurs.length;
}

Park.prototype.removeDinosaur = function(dinosaur) {
    const index = this.dinosaurs.indexOf(dinosaur);
    this.dinosaurs.splice(index,1);
}







module.exports = Park;