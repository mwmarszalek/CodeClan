const PaintCan = require('./paint_can.js');
const Room = require('./room.js');

const Decorator = function() {
    this.stock = [];
}

Decorator.prototype.checkLength = function(){
    return this.stock.length;
}

Decorator.prototype.addPaint = function(litres){
    const paintCan = new PaintCan(litres);
    this.stock.push(paintCan);
}

Decorator.prototype.totalLitres = function(){
    let total = 0
    for(const can of this.stock){
        total += can.litres;
    }
    return total;
}

Decorator.prototype.checkPaint = function(litres, area){
    if(litres > area){
        return true;
    } else {
        return false;
    }
}

Decorator.prototype.paintRoom = function(enoughPaint, totalLitres, room){
    if(enoughPaint === true){
        const paintLeft = totalLitres - room.area;
        room.is_painted = true;
        return paintLeft;
    }
}

Decorator.prototype.removeEmpties = function(){
        cansLeft = []
        for(const can of this.stock){
            can.checkEmpty();
            if (can.isEmpty === false) {
                cansLeft.push(can);
            }
        }
        this.stock = cansLeft;
}


module.exports = Decorator;