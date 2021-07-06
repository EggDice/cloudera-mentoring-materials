console.time();

setTimeout(() => {
  console.log("1 second passed");
  console.timeEnd();
}, 1000);

setTimeout(() => {
  console.log("0.1 second passed");
}, 100);


for(let j = 0; j < 5; j++) {
  setTimeout(() => {
    for (let k = 0; k < 10; k++) {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          console.log(100);
        }
      }, 0);
    }
    console.log(50);
  }, 0);
}

console.time('clock');
let i = 0;

function clock() {
  setTimeout(() => {
    console.log(++i);
    console.timeEnd('clock');
    console.time('clock');
    date = new Date();
  //  clock();
  }, 1000);
}

clock();

setInterval(() => console.log(i), 1000);
