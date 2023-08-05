// const person = {
//     name: 'Unwana',
//     gideon: {
//         name: 'Gideon',
//         gender: 'male'
//     },
//     cyril: {
//         name: {firstname: 'Gideon',
//     lastname: ''},
//         gender: 'male'
//     },
//     gender: 'female',
//     height: 6.2,
//     color: 'chocolate',
//     hobbies: ['playing', 'movies', 'gossip'],
//     greetings: function(){
//         console.log(`${this.name} is saying Hi!`)
//     }
// }

let students = [
    {
        name: 'Unwana',
        gender: 'female',
        height: 6.2,
        color: 'chocolate',
        hobbies: ['playing', 'movies', 'gossip'],
        img: './profile_pic.jpg'
    },
    {
        name: 'Gideon',
        gender: 'male',
        height: 5.2,
        color: 'black',
        hobbies: ['fifa', 'movies', 'eating'],
        img: './profile_pic.jpg'
    },
    {
        name: 'Cyril',
        gender: 'male',
        height: 6.2,
        color: 'chocolate',
        hobbies: ['pes', 'movies', 'chess'],
        img: './profile_pic.jpg'
    },
    {
        name: 'Gideon',
        gender: 'male',
        height: 6.2,
        color: 'chocolate',
        hobbies: ['sleeping', 'movies', 'enumerate'],
        img: './profile_pic.jpg'
    },
    {
        name: 'Uyai',
        gender: 'female',
        height: 6.2,
        color: 'puppy brown',
        hobbies: ['candy crush', 'chatting', 'secret agent'],
        img: './profile_pic.jpg'
    },
]

const picture = document.getElementById('picture')
const details = document.getElementById('details')

picture.setAttribute('src', students[2].img)

let student_no = 0;

for(let i = 0; i < Object.keys(students[student_no]).length - 1; i++){
    let data = document.createElement('p')
    let obj_key = Object.keys(students[student_no])[i]
    data.textContent = `${obj_key}: ${students[student_no][`${obj_key}`]}`
    details.appendChild(data)
}



