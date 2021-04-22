// 'any' opts out of type checking and is just like regular Javascript
var myVariable = 'This is a string';
// built in types
var num = 5;
var name1 = 'Alex';
var isPresent = true;
console.log(num);
console.log(name1);
console.log(isPresent);
// classes
var Car = /** @class */ (function () {
    function Car(model, doors, isElectric) {
        this.model = model;
        this.doors = doors;
        this.isElectric = isElectric;
    }
    // void is used for non returning functions
    Car.prototype.displayMake = function () {
        console.log("This car is a " + this.model);
    };
    return Car;
}());
var Hyundai = new Car('Hyundai', 5, false);
Hyundai.displayMake();
var Car1 = {
    model: 'Prius',
    make: 'Toyota',
    display: function () { console.log('hi'); }
};
Car1.display();
