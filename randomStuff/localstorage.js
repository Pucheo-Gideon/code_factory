// session Storage is for that one browsing session
// that is removed as soon as user closes that tap
// where the session was set

// Local Storage runs forever until a user deletes it
// or the developer deletes it
/*
Methods available for in LocalStorage
1. getItem:  Get something inside of local storage
2. removeItem: Allows us to remove something inside
the local storage.
3. setItem: Allows to set and item inside a local storage
Each one of them takes two parameters: A key and a value (key:value)

* The key is what you use when you want to get or remove something
* The value is what you get when you get or delete that item.
Everything inside a local storage must evaluate to string
I.e string key and string value
*/
localStorage.setItem('name', "Pascal");
console.log(localStorage.removeItem('name'));

sessionStorage.setItem('Location', 'Ontario')
console.log(sessionStorage.getItem('name'))