`use strict`

// ASI
// A - automatic
// S - semi-colon
// I - insertion

// JavaScript automatically inserts semi-colons for us

let x = 4 // ;

console.log(x);

// can lead to unwanted behaviour

let a = 1;
let b = 1;

// a // ;
// ++ //increment
// b // ;

a++;
b;

console.log(`a = ` + a);
console.log(`b = ` + b);

// if you have a RETURN with a new line it will return nothing

return // ;
    3;

return 3;