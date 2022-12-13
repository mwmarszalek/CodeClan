const assert = require('assert');
const Decorator = require('../../decorator.js');
const PaintCan = require('../../paint_can.js');
const Room = require('../../room.js');

describe('Decorator', function(){
    let decorator;
    let room;
    beforeEach(function(){
        decorator = new Decorator();
        room = new Room(30);
    });

    it('should start with an empty paint stock', function(){
        const actual = decorator.checkLength();
        assert.strictEqual(actual, 0);
    });
    it('be able to add a can of paint to paint stock', function(){
        decorator.addPaint(10);
        const actual = decorator.checkLength();
        assert.strictEqual(actual, 1);
    });
    it('be able to calculate the total litres of paint in stock', function(){
        decorator.addPaint(10);
        decorator.addPaint(10);
        decorator.addPaint(10);
        const actual = decorator.totalLitres();
        assert.strictEqual(actual, 30);
    });
    it('be able to calculate whether it has enough paint to paint a room', function(){
        decorator.addPaint(10);
        decorator.addPaint(10);
        decorator.addPaint(10);
        decorator.addPaint(10);
        const litres = decorator.totalLitres();
        const actual = decorator.checkPaint(litres, room.area);
        assert.strictEqual(actual, true);
    });
    it('be able to paint a room if it has enough paint in stock', function(){
        decorator.addPaint(10);
        decorator.addPaint(10);
        decorator.addPaint(10);
        decorator.addPaint(10);
        const litres = decorator.totalLitres();

        let enoughPaint = decorator.checkPaint(litres, room.area);

        decorator.paintRoom(enoughPaint, litres, room);
        const actual = room.is_painted;
        assert.strictEqual(actual, true);
    });


    // EXTENSIONS
    describe('Decorator Extensions', function(){
        it('should be able to decrease the amount of paint in stock when painting a room', function(){
            decorator.addPaint(10);
            decorator.addPaint(10);
            decorator.addPaint(10);
            decorator.addPaint(10);
            const litres = decorator.totalLitres();
            let enoughPaint = decorator.checkPaint(litres, room.area);
            const actual = decorator.paintRoom(enoughPaint, litres, room)
            assert.strictEqual(actual, 10)
        });
        it('should be able to remove empty paint cans from stock', function(){
            decorator.addPaint(10);
            decorator.addPaint(10);
            decorator.addPaint(10);
            decorator.addPaint(10);
            decorator.addPaint(0);
            decorator.addPaint(0);

            decorator.removeEmpties();
            const actual = decorator.checkLength();
            assert.strictEqual(actual, 4);
        });
    })
})