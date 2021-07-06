'use strict';

const o1 = {a: 1, b: 2};
const o2 = {c: 3, d: 4};

console.log({...o1, ...o2});

console.log(Object.assign({}, o1, o2, {e: 5}))
console.log(o1);

