const assert = require('assert');
const PaintCan = require('../../paint_can.js');

describe('PaintCan', function(){
    let paintCan;
    beforeEach(function(){
        paintCan = new PaintCan(10);
    });

    it('have a number of litres of paint', function(){
        const actual = paintCan.litres;
        assert.strictEqual(actual, 10);
    });
    it('should check if it is empty', function(){
        paintCan.litres = 0
        const actual = paintCan.litres;
        assert.strictEqual(actual, 0)
    });
    it('should be able to empty itself', function(){
        paintCan.emptyCan()
        const actual = paintCan.litres;
        assert.strictEqual(actual, 0)
    });
})