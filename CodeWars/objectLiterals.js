const createPerson = (name, age, gender) => {
  // Only change code below this line
 return {name, age, gender}
  // Only change code above this line
};

console.log(createPerson("daniel", 34, "female"))

let nick = "Pheron"
let model = "MD23p56"

let car = (nick, model)=> {

    return {nick, model}
}

console.log(car('Pheron', "MD23590"))


let server = {
    name: "Jerry",
    visitor: "Jandahl",
    returns (){
        return `${this.name} I want you to also go and exercise your franchise`
    },
    'come up'(){
       return `Hello ${this.name} I want you to direct Mr. ${this.visitor} to my office`
    }
}

console.log(server['come up']())
console.log(server.returns())
