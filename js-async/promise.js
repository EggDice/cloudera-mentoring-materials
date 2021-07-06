'use strict';

const fs = require('fs');

function readFilePromise(filename) {
  const p = new Promise((resolve, reject) => {
    fs.readFile(filename, (err, content) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(content.toString());
    })
  });
  return p;
}

const readApple = readFilePromise('filename.txt');

readApple
.then((c) =>
  readFilePromise(c.split('\n')[0])
)
.then(c =>
  c.length
)
.then(l => console.log(l))
.catch(e => console.error("something", e))


/*
fetch('somethin.com/api/asdf')
  .then(response =>
    response.json();
  ).then(json =>
    doSomthingWithit(json['somthing'])
  ).then(something =>
    store(something);
  ).then(storedid =>
    console.log(storedid)
  )
  .catch();
*/

Promise.resolve(4)
  .then(() => { throw 'CAT'; })
  .then(n => console.log(n))
  .catch(console.error)
  .then(() => 8)
  .then(n => console.log(n))

function readsFileOrGivesCat(filename) {
  return readFilePromise(filename)
    .catch(() => 'cat')
}

readsFileOrGivesCat('cat.txt').then(c => console.log(c))

Promise.all([readFilePromise('apple.txt'), readFilePromise('cat.txt')]).then(console.log)
