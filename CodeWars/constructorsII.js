// class Chair {
//   constructor(
//     color,
//     seatHeight,
//     recliningAngle,
//     headSupport,
//     padding,
//     seatSize,
//     isHeight,
//     isHeightAdjustable,
//     isMovable
//   ) {
//     this.color = color;
//     this.seatHeight = seatHeight;
//     this.recliningAngle = recliningAngle;
//     this.headSupport = headSupport;
//     this.padding = padding;
//     this.seatSize = seatSize;
//     this.isHeight = isHeight;
//     this.isHeightAdjustable = isHeightAdjustable;
//     this.isMovable = isMovable;
//     this.type = "Chair";
//   }

//   adjustableHeight() {}
//   adjustAngle() {}
//   moveChair() {}
// }

// const newChair = new Chair(
//   "Green",
//   "20 inch",
//   "20 deg",
//   true,
//   false,
//   "3 inch",
//   "16 inch",
//   false,
//   false
// );

// // console.log(newChair)

// class SittingRoomChair extends Chair {
//   constructor(color, isHeightAdjustable, seatHeight, recliningAngle) {
//     super();
//     this.type = "Sitting Room Chair";
//     this.color = color;
//     this.isHeightAdjustable = isHeightAdjustable;
//     this.seatHeight = seatHeight;
//     this.recliningAngle = recliningAngle;
//     this.isMovable = true;
//   }

//   adjustAngle(height) {
//     if (height > this.seatHeight) {
//       console.log(`Height changed to ${height}`);
//     } else {
//       console.log(
//         `Height cannot be decreased more than the seat height ${this.seatHeight}`
//       );
//     }
//   }

//   adjustAngle(angle) {
//     if (angle >= this.recliningAngle) {
//       console.log(`Height changed to ${angle}`);
//     }else{
//          console.log(
//            `Angle cannot be decreased more than the min reclining angle ${this.recliningAngle}`
//          );
//     }
//   }

//   moveChair(x, y){
//     console.log(`Chair co-ordinates has changed to (${x}, ${y})`)
//   }
// }

// const newSittingRoomChair = new SittingRoomChair();

// console.log(newSittingRoomChair.adjustAngle(40));
// console.log(newSittingRoomChair.moveChair(40, 40));

class Seat {
  static backSupport = true;
  static armRests = true;

  constructor(
    color,
    seatHeight,
    recliningAngle,
    headSupport,
    padding,
    seatSize,
    isHeight
  ) {
    this.color = color;
    this.seatHeight = seatHeight;
    this.recliningAngle = recliningAngle;
    this.headSupport = false;
    this.padding = "3 inch";
    this.seatSize = "16 inch";
    this.isHeightAdjustable = false;
    this.isMovable = false;
    this.type = "Chair";
  }

  static logObjectProps() {
    console.dir(this);
  }

    // adjustableHeight() {}
    // adjustAngle() {}
    // moveChair() {}
    
    static printDefaultProps(){
        console.log(`Chair Back Support = ${this.backSupport}`);
        console.log(`Chair Back Support = ${this.armRests}`);
    }
}   

class OfficeSeat extends Seat {
  #basePrice;
  #maxDiscount;
  #sellerAddress;

  constructor(type, color, isHeightAdjustable, seatHeight, recliningAngle) {
    super();
    this.type = type;
    this.color = color;
    this.isHeightAdjustable = isHeightAdjustable;
    this.seatHeight = seatHeight;
    this.recliningAngle = recliningAngle;
    this.isMovable = true;
    this.#basePrice = 1000;
    this.#maxDiscount = 5;
    this.#sellerAddress = "XYZ street";
  }
  adjustableHeight(height) {
    if (height > this.seatHeight) {
      console.log(`Chair height changed to ${height}`);
    } else {
      console.log(
        `Height cannot be decreased more than the seat height ${this.seatHeight}`
      );
    }
  }

  adjustAngle(angle) {
    if (angle >= this.recliningAngle) {
      console.log(`Chair angle changed to ${angle}`);
    } else {
      console.log(
        `Angle cannot be decreased more than the min reclining angle ${this.recliningAngle}`
      );
    }
  }

  moveChair(x, y) {
    console.log(`Chair moved to co-ordinates = (${x}, ${y})`);
  }

    //Newly Added function 

#getChairAmount(taxCharge){
    return this.#basePrice + (this.#basePrice - this.#basePrice * this.#maxDiscount/ 100) + taxCharge
}

    //Newly Added function
    generateBill (){
        console.log(`***** BILLING INFORMATION *****`)
        console.log(`Chair Price =${this.#getChairAmount(20)}`)
        console.log(`Seller Address = ${this.#sellerAddress}`)
    }
}


function Person(firstName, lastName, occupation, gender){
    this.firstName = firstName
    this.lastName = lastName
    this.occupation = occupation
    this.gender = gender
}


Person.prototype.getPersonBio = function (){
  console.log(`Hello. My names are ${this.firstName} ${this.lastName}. I am a ${this.occupation}`)
}
const doctor = new Person("Peterson", "Jackson", "Pediatrician", "Male")
const engineer = new Person("Johnson", "Norman", "Software Engr.", "Male")
const nurse = new Person("Doris", "Clark", "Nurse.", "Female")


// doctor.getPersonBio()

const student = {
  firstName: "Zenas",

  get name(){
    return this.firstName
  },

  set changeName(newName){
    this.firstName = newName
  }
}

student.changeName ="Jerry"
// console.log(student.firstName)



const  Market = {
  marketDayName: "UduaEkpeme",

  get name(){
    return this.marketDayName
  },

  set changeName(newName){
    this.marketDayName = newName
  }
}


Market.changeName = "Udua Mbakara"
console.log(Market.marketDayName)



const user = {
  name: "Phillip",
  surname: "Derrick",


  get fullName(){
    return  `${this.name} ${surname}`
  },

  set changedFullName(value){
    [this.name, this.surname] = value.split(" ")
  }
}

// Using Object.defineProperty to write set and get function

const Shops = {
  shopOwner: "Miriam Stokes",
  shopName: "MiriamDime Xclusiph_Cuisine",

}
Object.defineProperty(Shops, "ShopDetails", {
  get: function(){
    return `${this.shopOwner} ${this.shopName}`
  },

})

Object.defineProperty(Shops, "changeShopDetails", {
  set: function(value){
     this.shopOwner =  value
  }
})

Shops.changeShopDetails = "Kessy Palmer"
console.log(Shops.ShopDetails)
console.log(Shops.shopOwner)