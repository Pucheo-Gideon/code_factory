/*Write a profile with an image of yourself

*name,
*gender,
*Bio
*Hobbies

  */


let container1 = document.getElementsByTagName('div')[0];
container1.style.width = '200px';
container1.style.margin = '100px auto';
container1.style.border = 'solid grey';
container1.style.padding = ' 5px 5px';
container1.style.textAlign = 'center';

let container = document.getElementsByClassName('profile')
container.innerHTML = "Profile";
console.log(container);

let image = document.getElementsByTagName('img')[0];
image.setAttribute("src", "./gideon.JPG")
image.style.width = '200px';
image.style.height = 'auto';

function image2(){
    document.getElementsByTagName("img")[1];
    image2.setAttribute("src", "/.gideonII.JPG");
    image.style.width = "200px";
    image.style.height = "auto";

}

let imageTimeOut = setTimeout(image2, 5000);


let firstName = document.getElementsByTagName('p')[1];
firstName.innerHTML = "Name: Gideon";
console.log(firstName.textContent);

let gender = document.getElementsByTagName('p')[2];
gender.innerHTML = "Gender: Male"
console.log(gender);

let bio = document.getElementsByTagName('p')[3];
bio.innerHTML = "Bio: I'm a developer. I build web technologies."
console.log(bio)

let hobbies = document.getElementsByTagName('p')[4];
hobbies.innerHTML = 'Hobbies: Football, Basket and Jogging';
console.log(hobbies);

// let name = document.getElementById('name')

