// Q1) what What are the primitive and
//Non primitive data types in JavaScript?

// =====> Primitive data types <====
// Primitive data types are stored directly in memory as a value,
// and are accessed by their value. When you assign a primitive value
// to a variable, the variable holds a copy of that value.
// So if you assign a new value to the variable,
//the original value is not affected.

// => Number,String,Boolean,Null,Undefined,symbol

// for example:

// var x = 5;
// var y = x;
// x = 10;

// console.log(x)
// console.log(y);

// =====> Non-primitive (or reference) data types <====

// on the other hand, are stored as a reference to a location in memory
// where the data is actually stored.
//When you assign a non-primitive value to a variable,
//the variable holds a reference to that location in memory,
// rather than a copy of the value itself.
// This means that when you modify the value of the variable,
// you're actually modifying the value stored in that location in memory,
// which can affect other variables that reference the same location.

// => Object,Array,Function,Date,RegExp

// For example :

// let value1 = [1,2,3];
// let value2 = value1;
// value1.push(4);

// console.log(value1)
// console.log(value2)

//======================================================================================//

// Find the common object

// const input1 = { a: 1, b: 2, c: 3, d: 10, e: 12 };
// const input2 = { a: 2, e: 12, f: 6, d: 10 };

// const output = { d: 10, e: 12 }; // expected output

// function commonObject(input1, input2) {
//     let obj = {};
//     for(let i in input1){
//         if(input1[i] == input2[i]){
//             obj[i] = input1[i]
//         }
//     }
//     return obj;
// }

// console.log(commonObject(input1, input2));

// const commonObject = Object.keys(input1).filter(key => input2.hasOwnProperty(key))
// console.log(commonObject)     // it returns keys only


//======================================================================================//

console.log(a)
var a = 10