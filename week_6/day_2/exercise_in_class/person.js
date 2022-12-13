const Person = function(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    console.log(`Hi! My name is ${this.name}`);
}

module.exports = Person

