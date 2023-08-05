/*
Create an object calculator with three methods:

read() prompts for two values and saves them as object properties with names a and b respectively.
sum() returns the sum of saved values.
mul() multiplies saved values and returns the result.
*/ 

let calculator = {
    a: prompt("a"),
    b: prompt("b"),
    read (){
      alert(this.a)
      alert(this.b)
    },
    sum(){
       let sum = sum + +a + +b; 
    },
   
    multiply(){
       let multiple = this.a * this.b
    }
    }