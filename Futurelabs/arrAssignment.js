const emojis = [
"💘","💘","🌞","🧡","🍇",
"🧁","⚡️","💝","🐱","💘",
"🧡","💫","🍓","💜","⚡️",
"⚡️","🐶","💘","🍇","🐱",
"💘","💫","🍓","💜","💕",
"⚡️","💘","🌞","🐱","💘",
"💫","🍓","💜","⚡️","🧡",
"💕","🍇","💘"
]

// let uniqueEmojis = [new Set(emojis)]

// console.log(uniqueEmojis)

// emojis.map((c, index)=>{
//     console.log(`${c} - ${index} - ${emojis.indexOf(c)}`);
// })

let specificEmojis = emojis.filter((c, index)=>{
    return emojis.indexOf(c) === index;
})

console.log(specificEmojis)

// let duplicates = emojis.filter((c,index)=>{
//     return emojis.indexOf(c) !==index;
// });
// console.log(duplicates);

// let arrPresent = emojis.includes((item) =>{
//     if (item > 1) return true;
// })

// console.log(arrPresent);

