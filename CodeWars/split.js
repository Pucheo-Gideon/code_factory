let n = '"Bolton", "Celta", "Delta"'

let newNames = n.split(", ");
for (let names of newNames){
    console.log(`Send message to${names}`)
}