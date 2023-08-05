
// For Objects
let objects = {
    name: "alice",
    sex: "female",
    city: "denver",
    state: "colorado"
}

object = 2

let {sex, city, state} = objects


// For Arrays

let arrays = ["Daniel", 'Shedrach', "Musa", "Godwin"]

let [first, second, third, fourth] = arrays

console.log(first, fourth)


let user = {
    name: "John",
    surname: "Doe",
    location: "Mexico",
    sex: "male"
}

for(let[key, value] of Object.entries(user)){
    console.log(`${key}: ${value}`)
}


let name_one = "Andy"
let name_two = "Petrokov"

//  [ name_one, name_two] = [name_two, name_one ]

 console.log(`${name_two} : ${name_one}`)


  const removeFirstTwo =(list)=>{

    const [a, b, ...remaining] = list

    console.log(remaining)
  }


  const storage = [1, 2, 3, 4, 5]

removeFirstTwo(storage)