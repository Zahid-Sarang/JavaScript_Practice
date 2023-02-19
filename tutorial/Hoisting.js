// Q2) what is Hoisting?

// Hoisting is a JavaScript mechanism where variables and function declarations are moved to
// the top of their respective scopes during the compilation phase.
// This means that even if variables and functions are declared later in the code,
// they can still be used before their actual declaration.

// Here's an example:

// console.log(x); // undefined
// var x = 5;

// In the code above, even though the variable x is declared after the console.log statement,
// the code will not throw an error because var x is hoisted to the top of its scope.
//However, at the time the console.log statement is executed,
// x has not yet been assigned a value, so it will output undefined.

// Here's another example :

foo(); // "Hello, world!";
console.log(x);
console.log(foo);

function foo() {
  console.log("Hello, world!");
}
var x = 10;
