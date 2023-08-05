function isIsogram(str) {
    let number = 1
   let split =  str.split('').sort((a, b) => a-b)

//    split.sort((a,b)=> a-b)       
   console.log(split)
}

isIsogram('Gideon')