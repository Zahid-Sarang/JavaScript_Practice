// Lexical Environment

// function a(){
//     var b=10;
//     c();
//     function c(){
//      console.log(b);
//     }
// }
// a();
// console.log(b) // b is not define

// In JavaScript, a Lexical Environment is a structure that holds variables, functions,
// and other data that are associated with a specific scope or context.
// Every time a function is called, a new lexical environment is created,
// which includes a reference to the outer lexical environment or
// the enclosing scope of the function.

function outer() {
  var x = 1;
  function inner() {
    var y = 2;
    console.log(x + y);
  }
  inner();
}
outer(); // output:3

// In the code above, the function inner is defined inside the function outer. 
// When outer is called, a new Lexical Environment is created that includes the variable x
// and the function inner. When inner is called, a new Lexical Environment is created 
// that includes the variable y. Since y is not defined in the outer scope, 
// it is not accessible outside of inner. However, inner has access to the variables and functions 
// defined in the outer scope, which is why it can access the variable x.