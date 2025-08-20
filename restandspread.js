// REST AND SPREAD OPERATOR
// ...
// REST OPERATOR ...(denototed with [...])-
// Is used in destructuring to collect remaining values

const countries = ["Brazil", "Russia", "Japan", "Togo", "Portugal"];
const [first, , , ...others] = countries;
console.log(others);

const user = {
  name: "John Doe",
  age: 32,
  gender: "Male",
  isMarried: true,
};

const { isMarried, age, ...properties } = user;

//  spread operator ...
//  used in unpacking values
//  ===

const updateUser = {
  ...user,
  country: "Nigeria",
};
console.log(updateUser);

const developingCountries = ["Mali", ...countries, "Iran", "India"];
console.log(developingCountries);

const nums = [5, 7, 9, 3, 7];

console.log(Math.max(...nums)); // Math.max(5, 7, 9, 3, 7)

// optional chaining
user?.profilepicture;

// <img scr= user.profilepicture />

// nullish coalescence - to provide default values if a variable evaluates to null or undefined

const profilePicture = null;

console.log(profilePicture || "default avatar");

