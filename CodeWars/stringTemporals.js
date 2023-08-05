const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"],
};

function makeList(arr) {
  // Only change code below this line
  const failureItems = [];

  for (a = 0; a < arr.length; a++) {
    failureItems.push(`<li class="text-warning">${arr[a]}</li>`);
  }
  console.log(failureItems);
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);

for (let a = 0; a < result.failure.length; a++) {
  console.log(`<li class="text-warning">${result.failure[a]}</li>,`);
}
