const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    dinosaur = new Dinosaur('T-Rex','Carnivore',2137);
    dinosaur1 = new Dinosaur('T-Rex1','Carnivore',300);
    dinosaur2 = new Dinosaur('T-Rex2','Carnivore',500);
    dinosaur3 = new Dinosaur('T-Rex3','Carnivore',400);
    dinosaurs_list = [dinosaur,dinosaur1,dinosaur2,dinosaur3]
    park = new Park('Wonderland',25,['Pterodactile','Triceratops','Bulbasaur']);
  })

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual('Wonderland',actual);
  });

  it('should have a ticket price', function() {
    const actual = park.ticketPrice;
    assert.strictEqual(25,actual);
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.dinosaurs;
    assert.deepStrictEqual(['Pterodactile','Triceratops','Bulbasaur'],actual)

  })

  it('should be able to add a dinosaur to its collection',function() {
    park.addDinosaur(dinosaur1)
    actual = park.checkLength();
    assert.strictEqual(4,actual)
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.removeDinosaur('Bulbasaur');
    actual = park.checkLength();
    assert.strictEqual(2,actual);
  });

  it('should be able to find the dinosaur that attracts the most visitors');


  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
