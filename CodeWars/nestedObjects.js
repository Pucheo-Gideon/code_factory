let myData = {
  Bio: {
    name: { First_name: "Gideon", Surname: "Okwongudo" },
    siblings: {
      names: { 2: "Jerry", "3rd": "Zenas", "4th": "Joy" },
    },
    Education:  true
  },
  hobby: {1: "reading", 2: "writing", 3: "musing wisdom"}
};

let dataResult = myData.Bio.name["First_name"];
// console.log(dataResult)

// let varr = 2

let deepNesting = Object.values(myData.Bio.name)
console.log(`result ===> ${deepNesting}`)
// let varResult = myData.Bio.siblings.names[varr]
// console.log(varResult)

let dogBusiness = {
    owner: {
        name: {firstName: "Kanskin", secondName: "Joel"},
        personalLife: {
            married: true,
            issues:{
                name: {"first": "Kopland", "second":"Douglass", "Third": "Cindy"}
            }
        },
        hobby:"Chess-playing"
    },
    business:{
        businessName: "Kandy Kitten Inc",
        est: 2002,
        staff: 14,
        turnOvers: "$2mil per annum",
        dogSpecie:{
            name: "Constanos",
            color: "soil maroon",
            fur: false
        }
    }
}


let deep = dogBusiness.owner.personalLife.issues.name["second"]
console.log(deep)

// let dd = dogBusiness[0].name[1]
// console.log(dd)