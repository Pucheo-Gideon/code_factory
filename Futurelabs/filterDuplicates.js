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

// let filteredEmojis = emojis.filter((item, index) => {
//     return emojis.indexOf(item) === index
// })

// console.log(filteredEmojis);

// let duplicates = emojis.filter((item, index) => {
//     console.log(emojis.indexOf(item) === index)
// })
// console.log(filteredEmojis)

let filtrates = emojis.filter((items, index)=>{
    return emojis.indexOf(items) === index;
})

console.log(filtrates);

let filtratesII = emojis.filter((items, index) =>{
    console.log(emojis.indexOf(items) ===index);
})

let filtratesIII = emojis.re