function floor(type, quantity) {
    this.type = type;
    this.quantity = quantity;
}
floor.prototype.ready = function () {
    return `Your ${this.quantity}kg ${this.flavour} cake of floor ${this.type} is ready.`;
}
// floor.prototype.slogan = `Your ${this.quantity}kg ${this.flavour} cake of floor ${this.type} is ready.`;
let wheat = new floor("wheat", 5);
// console.log(wheat.ready());
//creating the cake constructor from floor 
function cake(type, quantity, flavour){
    floor.call(this, type, quantity);
    this.flavour = flavour;
}
//inherit the prototype
cake.prototype = Object.create(floor.prototype)
let choco = new cake("wheat", 2, "choco")
console.log(choco.ready());
//setting the constructor manually
cake.prototype.constructor = cake;
console.log(choco);