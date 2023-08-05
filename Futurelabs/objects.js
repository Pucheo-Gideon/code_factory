let dog = {
  name: "Bingo",
  gender: "male",
  action: function bark() {
    console.log(`${this.name} is saying Woof Woff!!!`);
  },
};

console.log(dog);
console.log(dog.name);
console.log(dog.gender);
dog.action(dog.name);
