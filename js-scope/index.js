'use strict';
var d;
console.log(i);

function greet(name, ...rest) {
  // console.log(Array.from(arguments));
  console.log(name);
  console.log(rest);
}


greet('Tojas');
greet();
greet('Tojas', 'Monkey');

if (true) {
  var a = 8;
  let c = 6;
}

// console.log(c); -> error
console.log(a);

function printVarA() {
  console.log(a);
  var b = 9;
  // e = 99; -> only error with use strict
  console.log(e);
}

printVarA();
console.log(e);

// console.log(b); -> error

for (var i = 0; i < 3; i++) {

}
console.log(i);

console.log(d);
d = 5;
console.log(d);
