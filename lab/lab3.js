// Function 1
// function multiply(a, b) {
//   return a * b;
// }

// const multiplyArrow = (a, b) => a * b;
// console.log(multiplyArrow(3, 4)); 
// // Function 2
// function isPositive(number) {
//   return number >= 0;
// }
// const  isPositiveArrow = (number) => number >= 0;
// console.log(isPositiveArrow(-5)); 
// // Function 3
// function getRandomNumber() {
//   return Math.random();
// }

// const getRandomNumberArrow = () => Math.random();
// console.log(getRandomNumberArrow());
// // Function 4
// document.addEventListener("click", function () {
//   console.log("Clicked!");
// });
// document.addEventListener("click", () => console.log("Clicked!"));



// function createUser(name, age, isAdmin) {
//   if (name === undefined) name = "Anonymous";
//   if (age === undefined) age = 18;
//   if (isAdmin === undefined) isAdmin = false;

//   return {
//     name: name,
//     age: age,
//     isAdmin: isAdmin,
//   };
// }

// function createUser(name = "Anonymous", age = 18, isAdmin = false) {
//   return {
//     name,
//     age,
//     isAdmin,
//   };
// }



const mergeArrays = (...arrays) => arrays.flat();

console.log(mergeArrays([1, 2], [3, 4], [5, 6]));




const sumAll = (...numbers) => numbers.reduce((total, num) => total + num, 0);

console.log(sumAll(1, 2, 3, 4, 5));

const createProduct = (
  name = "name",
  price = 0,
  category = "general",
  inStock = true
) => ({
  name,
  price,
  category,
  inStock,
});

console.log(createProduct("Laptop", 1500, "Electronics", false));

