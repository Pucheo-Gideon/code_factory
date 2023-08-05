function smash(words){
    let regex = /^[a-Z0-9]/gi
    let result = replace(words, regex)
// return result.join(" ");
   
    // return result === ""? [] : result
    
}

console.log(smash("[Hello, everyone, how are we doing today]"))