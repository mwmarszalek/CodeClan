const PaintCan = function(litres) {
    this.litres = litres;
    this.isEmpty = false
}

PaintCan.prototype.checkEmpty = function(){
    if (this.litres === 0) {
        this.isEmpty = true;
    }
}

PaintCan.prototype.emptyCan = function(){
    this.litres = 0;
    this.isEmpty = true
}

module.exports = PaintCan;