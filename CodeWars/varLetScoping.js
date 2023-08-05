
function letScoping(){
    let x = 5 
    if(x=5){
        let x = 6
        console.log('Declaring the second value', x)
        // prints out the second x which is 6
    }
    
    console.log('Declaring the first value',x)
    // prints out the first x which is 5 
    
}

letScoping()


function varScoping(){
    var a = 5

    if(x=a){
        var a = 6
    console.log(a)
    // prints 6
    }

    console.log('' ,a)
    // Still Prints 6
    // The first value of 'a' has been overwritten by the second, 
    // not minding the scope.
}

varScoping()