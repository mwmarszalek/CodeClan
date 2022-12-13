const Taxi = function(manufacturer,model,driver) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.driver = driver;
    this.passengers = []
}
// if somethin starts with empty array, there is no need to add it to parameters

Taxi.prototype.countPassengers = function() {
    return this.passengers.length
}
Taxi.prototype.addPassenger = function(passenger) {
    this.passengers.push(passenger)
}

Taxi.prototype.removePassengerByName = function(name) {
    const indexOfPassenger = this.passengers.indexOf(name)
    this.passengers.splice(indexOfPassenger,1);
}

Taxi.prototype.removeAllPassengers = function() {
    this.passengers = []
    // or this.passengers.splice(0, this.numberOfPassengers())
}



module.exports = Taxi;
