// 'any' opts out of type checking and is just like regular Javascript
let myVariable: any = 'This is a string'

// built in types
let num: number = 5;  
let name1: string = 'Alex';  
let isPresent: boolean = true;

console.log(num);
console.log(name1);
console.log(isPresent);

// classes
class Car {

// fields  
  model: String;  
  doors: Number;  
  isElectric: Boolean;

constructor(model: String, doors: Number, isElectric: Boolean) {  
    this.model = model;  
    this.doors = doors;  
    this.isElectric = isElectric;  
  }

// void is used for non returning functions
displayMake(): void {  
    console.log(`This car is a ${this.model}`);  
  }

}

const Hyundai = new Car('Hyundai', 5, false)
Hyundai.displayMake()

// Interfaces: defines the structure of variables which can be reused 

interface ICar {  
  model: String,  
  make: String,  
  display(): void  
}

const Car1: ICar = {  
  model: 'Prius',  
  make: 'Toyota',  
  display() { console.log('hi'); }  
}

Car1.display()