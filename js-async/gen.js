
function *myGenerator() {
  yield Promise.resolve(1);
  yield Promise.resolve(2);
  yield Promise.resolve(3);
}

let g = myGenerator();

console.log(g.next())


