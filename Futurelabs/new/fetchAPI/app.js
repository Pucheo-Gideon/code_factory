//GET REQUEST

fetch("https://jsonplaceholder.typicode.com/posts/2")
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => {
    console.log(error);
  });

//POST REQUEST

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "New Student",
    body: "Usenmfon",
    userId: 2,
  }),
  headers: { "Content-Type": "application/json; charset=UTF-8" },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

//PUT REQUEST

fetch("https://jsonplaceholder.typicode.com/posts/2", {
  method: "PUT",
  body: JSON.stringify({
    id: 2,
    title: "New Student",
    body: "Usenmfon Samuel",
    userId: 2,
  }),
  headers: { "Content-Type": "application/json; charset=UTF-8" },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

//DELETE RESPONSE

fetch("https://jsonplaceholder.typicode.com/posts/1",{
    method: 'DELETE'
})
