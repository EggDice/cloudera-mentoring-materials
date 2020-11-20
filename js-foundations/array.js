const original = [0, 1, 2];

const arr = original
  .map(e => e + 1)
  .filter((e, i, a) => a[i + 1] !== 3)


console.log(arr)
