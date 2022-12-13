const assert = require('assert');
const { prototype } = require('events');
const Taxi = require('../taxi.js');


describe('Taxi',function() {
    let taxi;
    beforeEach(function() {
        taxi = new Taxi('Toyota','Prius','Jane');
    })


    it('should have a manufacturer',function() {
        const actual = taxi.manufacturer;
        assert.strictEqual(actual,'Toyota');
    });
    it('should have a model',function() {
        const actual = taxi.model;
        assert.strictEqual(actual,'Prius')
    });
    it('should have a driver',function() {
        const actual = taxi.driver;
        assert.strictEqual(actual,'Jane');
    })

    describe('passengers',function() {
        it('should start with no passengers',function() {
            const actual = taxi.passengers;
            assert.deepStrictEqual(actual,[]);
        });
    })
    it('can count passengers',function() {
        const actual = taxi.countPassengers();
        assert.strictEqual(actual,0)
    })
    it('can add passengers', function() {
        taxi.addPassenger('Dave');
        const actual = taxi.countPassengers();
        assert.strictEqual(actual,1)
    })
    it('can remove passengers', function() {
        taxi.addPassenger('David');
        taxi.addPassenger('Mike');
        taxi.removePassengerByName('Mike');
        const expected = ['David'];
        const actual = taxi.passengers;
        assert.deepStrictEqual(actual,expected)
    })
    it('should be able to remove all passengers', function() {
        taxi.addPassenger('David');
        taxi.addPassenger('Mike');
        taxi.removeAllPassengers();
        const actual = taxi.countPassengers();
        assert.strictEqual(actual,0);
    })

});


