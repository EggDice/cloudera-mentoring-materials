import { promises as fs } from 'fs';

let arr = [
  fs.readFile('apple.txt'),
  fs.readFile('default.txt'),
  fs.readFile('filename.txt'),
];
/*
const results = await Promise.allSettled(arr);
console.log(results);
*/

for await (let content of arr) {
  console.log(content);
}
