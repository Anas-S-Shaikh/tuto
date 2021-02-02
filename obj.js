function myObj(name, age){
    this.name = name;
    this.age = age;
    this.greet = function () {
        console.log( `${this.name} your age is ${this.age}`);
    }
}
myObj.prototype.tarif = function () {
    console.log(`${this.name} you are a good boy`)
    console.log(this.variable)
}
myObj.prototype.variable = 100;
anas = new myObj("Anas", 20);
console.log(anas);
anas.greet();