'use strict';


console.log(greet);
function greet(name) {
  console.log(name);
}

let g = greet;

console.log(g);
g('Tojas');
console.log(g === greet);

console.log(hello);
var hello = function (name) {
  console.log('Hello ' + name);
}

var ciao = name => console.log('Ciao ' + name);
// lambda name: print(name)

ciao('Tojas');


function politelyGreetTojas(...greeters) {
  for (let greeter of greeters) {
    greeter('Tojas');
  }
}

politelyGreetTojas(ciao, hello, g)

function getOperation(operation) {
  if (operation === 'add') {
    return (a, b) => a + b;
  } else if (operation === 'substract') {
    return (a, b) => a - b;
  } else {
    return (a, b) => undefined
  }
}

let func = getOperation('add');
console.log(func(3, 4));
let otherFunc = getOperation('substract');
console.log(otherFunc(7, 8))
