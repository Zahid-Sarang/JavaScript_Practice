// what is bloackScope?

// blockScope is define by {} 
// block scope wrap multiple statement into group  where javaScript expected one statement

// {
//     var a = 1;
//     let b = 2;
//     const c = 3;
// }
// console.log(a);

// function block() {
//     console.log(a)
// }
// var a=100;
// block();


// what is shadowing in javascript

// Shadowing in JavaScript refers to the situation where a variable declared within a certain scope
// has the same name as a variable declared in an outer scope. 
// When this happens, the inner variable "shadows" or overrides the outer variable, 
//making it inaccessible within that inner scope.

// let x = 10;

// function myFunction() {
//   console.log(x);
//   let x = 5;
//   console.log(x);
// }

// myFunction(); // Output: 5
// console.log(x); // Output: 10
