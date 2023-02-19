//===================array to object===============================//

// var techBrands = [
//    'FaceBook',
//    'LinkedIn',
//    'Twitter',
//    'Instagram',
//    'Youtube',
//   'Google'
// ];
// var object = {...techBrands};
// console.log(object)

// let obj = techBrands.reduce((a,it,i) => ({...a,[i]:it}), {})
// console.log(obj)

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

//=========================== Object to Array ===============================//

// const obj = {
//   '0': 'FaceBook',
//   '1': 'LinkedIn',
//   '2': 'Twitter',
//   '3': 'Instagram',
//   '4': 'Youtube',
//   '5': 'Google',
//   '5': 'Google',
// }

// const array = Object.keys(obj).map(key => obj[key])
// // console.log(array)
// console.log(obj[0])

// const arr = Object.keys(obj)   // it converts object keys into array
// const arr = Object.values(obj) // it converts object values into array
//  const arr = Object.entries(obj); // it creates array inside array
// it convert key value into 1 single Array like [['0','FaceBook']]
// console.log(arr)

//=========================== Find Duplicates value in Array ===============================//

// var array = [6, 9, 15, 6, 13, 9, 11, 15];

// const length = array.length;
// var newArray = [];

// for(let i = 0;i<length -1 ;i++){
//   for(let j = i+1;j<length;j++){
//     if(array[i] === array[j]){
//       newArray.push(array[i])
//     }
//   }
// }

// console.log(newArray)

// method 2:

// var newArr = array.filter(
//   (currentValue, currentIndex) => array.indexOf(currentValue) !== currentIndex
// );

// console.log(newArr)

// Method 3:

// const uniqueSet = new Set(array);
// console.log(uniqueSet)
// const filterElement = array.filter((arr) => {
//   if(uniqueSet.has(arr)){
//     uniqueSet.delete(arr)
//   }else{
//     return arr;
//   }
// })

// console.log(filterElement);

// In the above example, the array is the initial array, and uniqueSet is the set that contains 
// all the values from the array only one time. After that we are using the filter() function 
// where the array is checked for duplicate values with uniqueSet using has() method, 
// and it will return all the values from the array that remains after deleting the 
// items that are common in the uniqueSet and array.

//=========================== Find Duplicates value in Object ===============================//

