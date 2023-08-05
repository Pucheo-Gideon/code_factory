const main = document.getElementsByTagName('main')[0]
const clear_button = document.getElementById('clear_button')
const action_buttons = document.getElementsByTagName('small')[0]


let profiles = localStorage.getItem("profile")
let data = JSON.parse(profiles)
let div;
let delete_tag;
let download;

// console.log(data.pop())
// console.log(data)

//This loops through array of elements
// console.log(Object.keys(data[0]).length)
for(let i = 0; i < data?.length ; i++){
    div = document.createElement('div')
    div.style.backgroundClip = "green"
    delete_tag = document.createElement('button')
    delete_tag.innerHTML = "Delete"
    download = document.createElement('button')
    download.innerHTML = "download"
    download.style.marginLeft = "170px" ;
    //This loops through the objects
    for (let index = 0; index < Object.keys(data[0]).length; index++) {
      let p = document.createElement("p");
      let key_property = Object.keys(data[i])[index];
      let value = data[i][`${key_property}`];
      p.innerHTML = `${key_property.toUpperCase()} : ${value}`;

      div.append(p, delete_tag, download);
    }
    main.appendChild(div)
}

clear_button.addEventListener('click', function(){
    action_buttons.style.display = "flex";
})


for(let i = 0; i < action_buttons.children.length; i++){
    action_buttons.children[i].addEventListener('click', function(){
        if(i == 0){
            localStorage.removeItem("profile")
            main.remove()
            action_buttons.style.display = "none";
        }else{
            action_buttons.style.display = "none";
        }
    })
}


// console.log(main.children[0].children[3])

for(let i = 0; i < main.children.length; i++){
    main.children[i].children[3].addEventListener('click', function(){
        if(i == 0){
            let delete_item = [...data]
            console.log(delete_item)

        }else{
            console.log(main.children[i])
        }
    })
}


