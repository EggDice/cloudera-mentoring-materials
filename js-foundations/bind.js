'use strict';

function alma() {
  console.log(this);
}

const o = {
  alma: alma.bind(9)
}

alma();

o.alma();

alma.kecske = 4;

const boundAlma = alma.bind(4);
console.log(alma);
console.log(boundAlma);

alma();
boundAlma();


const obj = {
  barack: 1,
  korte: function() {
    console.log(this.barack);
  }
}

obj.korte();

setTimeout(obj.korte.bind(obj), 1500);

setTimeout(() => obj.korte(), 3000);

let fn = obj.korte.bind(obj);
fn();




