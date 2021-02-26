let obj = {
  name: "Tibbor",
  age: 32,
  job: "Frontend",
};

console.log(obj);

let name = "Gabbor";
let age = 28;

let obj2 = {
  name, // name: name
  age,
  job: "Full Stack",
}

console.log(obj2);

let arr = [4, 5, 6, 7, 8, 9, 10];

let [a, b, , c, ...rest] = arr;

console.log(a, b, c);
console.log(rest);

function print(a, b, ...rest) {
  console.log(a, b, rest);
}

print(1,2)
print(1,2,3,4,5)

let numbers = [8, 42, 144];

let moreNumbers = [2, ...numbers];
console.log(moreNumbers);

let dog = {type: 'Dalmata', legs: 4, spots: 101};

let { type, legs, ...r } = dog;
console.log(type);
console.log(legs);
console.log(r);
