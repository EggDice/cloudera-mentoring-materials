import { promises as fs } from 'fs';

async function readFileAndPrint() {
  /*
  fs.readFile('appl.txt')
    .then(c => c.toString())
    .catch(() => 'No Content')
    .then(console.log);
    */
  try {
    let c = await fs.readFile('apple.txt');
    await new Promise((r) => setTimeout(r, 3000));
    console.log(c.toString());
  } catch (e) {
    console.log('No Content');
  }
}

//readFileAndPrint();
//setTimeout(() => console.log('should happen before'), 1000)


const readFileAsString = async (filename) => {
//  throw new Error('BOOM');
  try {
    const content = await fs.readFile(filename);
    return content.toString();
  } catch (e) {
    console.error(e);
    await mySleep(2);
    return readFileAsString('default.txt');
  }
};

readFileAsString('pple.txt')
  .then(console.log)
  .catch(() => console.log('error happened'));
//console.log(result);

async function mySleep(seconds) {
  await new Promise((r) => setTimeout(() => r(seconds),
    seconds * 1000));
}

await mySleep(3)
console.log('hello');


