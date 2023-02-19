//===================array to object===============================//

var techBrands = [
  "FaceBook",
  "LinkedIn",
  "Twitter",
  "Instagram",
  "Youtube",
  "Google",
];
// var object = {...techBrands};
// console.log(object)

//===================Fill array with data===============================//

// var newArray=new Array(3).fill('Hello')
// console.log(newArray)

//===================Remove duplicates form Array===============================//

// var duplicates = [
//   "Netflix",
//   "Netflix",
//   "Facebook",
//   "Twitter",
//   "Instagram",
//   "Youtube",
//   "Google",
//   "Youtube",
//   "Google",
// ];

// The Javascript Array. from() method is used to create a new
//array instance from a given array.
// var newArray = Array.from(new Set(duplicates));
// console.log(newArray);

// var set1 = new Set("zahid"); // if i enter value in [] it will return a value in array form
// // if i give value just in () it will retrun spred string/value
// e.g input new set("zah") output => {"z","a","h"}
// console.log(set1.size)

//===================Merage Array===============================//

// var cars = ["Bmw", "Audi", "Tata"];

// var bike = [
//     "RoyalEnfield",
//     "Bmw",
//     "Kawasaki",
//     ...cars
// ]

// console.log(bike)
// var motrs = [].concat(bike,cars,techBrands)

// console.log(motrs)

// JavaScript offers multiple ways to merge arrays.

// You can use either the spread operator [...array1, ...array2],
// or a functional way [].concat(array1, array2) to merge 2 or more arrays.
// These approaches are immutable because the merge result is stored in a new array.
// To perform a mutable merge, i.e. merge into an array without creating a new one,
// then you can use array1.push(...array2) approach.

//====================================HOW TO DEEP CLONE AN OBJECT IN JAVASCRIPT======================================//

// const cart = {
//     userId:454456,
//     items:[
//         {
//             id:123,
//             name:"Bike",
//             price:1000
//         },
//         {
//             id:456,
//             name:"Car",
//             price:2000
//         },
//     ],
//     totalPrice:3000
// };

// const clonedCart = JSON.parse(JSON.stringify(cart));

// =============================== Move Zero to end of the Array ==================================//

// var array = [1,0,2,0,4,6]
 
// array.map((item) => {
//   if(item === 0){
//     array.splice(array.indexOf(item),1)
//     array.push(item)
//   }
// })
// console.log(array)

