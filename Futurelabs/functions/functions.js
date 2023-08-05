var people =['Doe', 'Glenfield', 'Constance']

for (let person of people){
    // console.log(person);
}

function catGreeter(){
    // console.log("Hey Cat! You're a fine animal!!!" )
    // console.log("Meeeooooowwww!!!")
}

// run, call, invoke, execute

catGreeter();

function specialGreeter( name){
    // console.log("Hey! " + name + " You have a cool fur")
}

specialGreeter("Daniel")

function adder(a, b, c, d, e){
    // console.log(a + b + c + d)
}

adder(6, 4, 56, 67)

function printerArray(mango){
    for (var i=0; i<mango, length; i++){
    // console.log(mango[i]);
    }
}

printerArray(["cat", "kangaroo", "spider", "raccoon", "joe"])

function adderTwo(numb1, numb2){
    return numb1 + numb2;
}
adderTwo(2, 4)

var result = adderTwo(16, 7)
// console.log(result)

function doesExist(nums, num){
    for(var i=0; i<nums, length; i++){
        if(nums [i] === num){
            return true
        }
    }
return false;
}

doesExist([1, 2, 3, 5], 0)

// let outResult = doesExist([1, 2, 3, 5], 0);
// console.log(outResult)