/* Constructors: Used to create new instance of an object.
 - Object literals used for creating a single object.
 - a constructor is useful for creating multiple objections.
  - Object created with constructors are unique.
  - If a change is made in object created using a constructor,
  it will not affect the other object created by the same constructor
 */

function Names (color){
    this.color = color;
}

var newName = new Names("red")
// console.log(newName)

// Number: Two

function Automobiles(name, model, engine, color){
    this.name = name;
    this.model = model;
    this.engine = engine; 
    this.color = color
}

let auction = new Automobiles("Mustang", "Crescent", "1#234", "red")

// console.log(auction);


class CallName {
    constructor(name, age){
        this.name = name;
        this.age = age
    }

    IntroduceYourself(){

        console.log(`Hello everyone my name is ${this.name} and I am ${this.age} years old!`)
    }

}

const call = new CallName("Felix", 24)

// console.log(call.IntroduceYourself())



function Pen(name, color, price){
 this.name = name;
 this.color = color;
 this.price = price;
}


const pen1 = new Pen("Market", "Blue", "$10")
// console.log(pen1)

// This is implicit declaration of a function in a class
Pen.prototype.showPrice = function (){
    console.log(`The price of this ${this.color} is this ${this.price}`)
}

// pen1.showPrice()


// Explicit declaration of a functions inside a class. Arguments in a variable are called instances of the class

// Chair is the Parent class.
class Chair {
    constructor(color, seatHeight, recliningAngle, backSupport, headSupport, padding, armRests, seatSize, isHeightAdjustable, isMovable){

    this.color = color;
    this.seatHeight =  seatHeight;
    this.recliningAngle = recliningAngle;
    this.backSupport = backSupport;
    this.headSupport = headSupport;
    this.padding = padding;
    this.armRests = armRests;
    this.seatSize = seatSize;
    this.isHeightAdjustable = isHeightAdjustable;
    this.isMovable = isMovable;
    this.type = "Chair"

}

adjustableHeight(){}
adjustAngle(){}
moveChair(){}
}

const newChair = new Chair("Blue", "25 inch", "26 deg", true, false, "3 inch", true, "16 inch", false, false);


// console.log("Chair Prototype", Chair)
// console.log("Chair object:", newChair)


// This is the child Class or Subclass. Inherits properties or attributes from the parents class Chair
class OfficeChair extends Chair{
    constructor(color, isHeightAdjustable, seatHeight, recliningAngle){
        super();
        this.type = "Office Chair",
        this.color = color,
        isHeightAdjustable = isHeightAdjustable,
        seatHeight = seatHeight,
        recliningAngle = recliningAngle
    }

    adjustableHeight(height){
        if(height>this.seatHeight){
            console.log(`Chair height changed to ${height}`)
        }else{
            console.log(`Height cannot be decreased more than the seat height ${this.seatHeight}`)
        }
    }

    adjustAngle(angle){
        if(angle>=this.recliningAngle){
            console.log(`Chair angle changed to ${angle}`)
        }else{
            console.log(
              `Angle cannot be decreased more than the seat height ${this.recliningAngle}`);
        }
    }

    moveChair(x, y){
        console.log(`Chair moved to co-ordinates =(${x}, ${y})`)
    }
}

const newOfficeChair = new OfficeChair("Red", true, 30, 30)

console.log(newOfficeChair.adjustableHeight(15))
console.log(newOfficeChair.adjustAngle(90))
console.log(newOfficeChair.moveChair(10, 20))

