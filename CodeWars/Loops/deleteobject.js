
let objectArr = [
    {id: '1',
        name: "fortune" ,   
        age: "34"    
    },
    {   id: '2',
        name: "Davis" ,   
        age: "14"    
    },
    {   id: '3',
        name: "Gregory" ,   
        age: "21"    
    },
]


let deletedId =(id)=> {

  
    
      let index = objectArr
        .map((e) => {
          return e.id;
        })
        .indexOf(id);

       let getIndex = objectArr.splice(index, 1)
       console.log(getIndex)

}
deletedId()