// const names = ["Fred","Kate","Cindy","Ricky","Keith"];
// console.log(names);

// // destructuring:

// const [fred,kate, ...bananas] = names;
// console.log(bananas);


// const person = {
//   name: "Joni",
//   age: 76
// }
// const name = person.name;
// const age = person["age"];

// console.log(name);
// console.log(age);


const person = {
  name: "Joni",
  age: 76
}
const { name, ...otherProperties } = person;         

console.log(otherProperties);