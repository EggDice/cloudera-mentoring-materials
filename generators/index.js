'use strict';

function* myGenerator() {
  let i = 0;
  while (true) {
    yield ++i;
  }
}

const it = myGenerator();

for (let number of it) {
  console.log(number);
}
