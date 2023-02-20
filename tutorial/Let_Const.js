// let/const is place in seprated memory space
// var is place in global memory space
// that's why var type variable is hoisted
// let/const type variable only acceseble if we assign a value to it 

// the temporal dead zone is a time  since when let variable hoisted and 
// till it is intialize some value the time between that is knows as temporal dead zone

// when varial in temporal dead zone it's give you referenceError 
// you can not access a varial in temporal dead zone

// console.log(b)
// let a = 10;
// var b = 20;
// console.log(a)