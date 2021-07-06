'use strict';

const fs = require('fs');


function callPropertyLater(object, key, callback) {
  setTimeout(() => {
    try {
      const returnValue = object[key]();
      callback(null, returnValue)
    } catch (e) {
      callback(e);
    }
  }, 100);
}


callPropertyLater({apple: () => 4}, 'apple', (err, value) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(value);
});

fs.readFile('filename.txt', (err, content) => {
  if (err) {
    console.error(err);
    return;
  }
  fs.readFile(content.toString().split('\n')[0], (err2, content2) => {
    if (err2) {
      console.error(err2);
      return;
    }
    console.log(content2.toString());
  });
});



