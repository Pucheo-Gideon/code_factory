// EXAMINE THE DOCUMENT OBJECTS
// console.dir(document)

// console.log(document.domain)
// console.log(document.URL)
// console.log(document.title)
// document.title = 123
// console.log(document.doctype)
// console.log(document.head)
// console.log(document.body)
// console.log(document.all)
// console.log(document.all[10])

// document.all[10].textContent = 'Hello Good Morning'

// console.log(document.forms[0])
// console.log(document.links)

// getElementById  Selections

console.log(document.getElementsByClassName('title'));

var title = document.getElementsByClassName('title');

console.log(title);

title.textContent = "Hello"

title.inner