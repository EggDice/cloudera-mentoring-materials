'use strict';

let m = new Map();

m.set(1, 'H');
m.set(2, 'He');

let o = {apple: 2}

m.set(o, 6)

m.delete(o)

console.log(m.has(o));

console.log([...m])

for (let [k, v, a] of m) {
  console.log(`Key: ${k} and Value: ${v}`, a)
}

m.set(undefined, 0)

m.set(undefined, 8)

m.set(true, 9)

m.set(NaN, 100)

console.log(m.get(NaN))

console.log(m.entries())

console.log(m.length)

let s = new Set();

s.add('Sherry');

s.add('Tamas');
s.add('Tamas');
s.delete('Sherry')

console.log(s.has('Tamas'));

let numbers = [1,2,3,3,4,5,5]

console.log([...new Set(numbers)]);

console.log([...s]);

let o2 = {apple: 2}
console.log(new Set([o,o,o2]))

let bigObjects = [
  {visuals: [{}, {}, {}]},
  {visuals: []},
  {visuals: [{}]}
];

m.set(bigObjects[2], "anything");

bigObjects.length = 2;
console.log(bigObjects);



let wm = new WeakMap();

wm.set(o, 'awesome');

console.log(wm.get(o));
