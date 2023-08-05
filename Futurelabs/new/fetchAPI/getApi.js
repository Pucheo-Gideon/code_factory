let photos

fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
.then((response) => response.json())
.then((data) => {
    console.log(data)
})
.catch((error) => console.log(error))
