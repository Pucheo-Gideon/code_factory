
// function getRandom(){
//     console.log(Math.random())
//     return Math.random()
// }

// getRandom(1)

const getFloor = ()=> {
    let result = []
    let number = 20
    for(let i=0; i<=number; i++){
        return result = Math.floor(Math.random()*number)
    }
   console.log(result)
}

// getRandomTwo()
getFloor()


const twoRange = (myMax, myMin)=> {
    
    result = Math.floor(Math.random()* myMax-myMin+1)+myMin
    
}
twoRange(45,28)
