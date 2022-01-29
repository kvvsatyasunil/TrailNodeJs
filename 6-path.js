const path = require('path');
// console.log(path);

const filePath = path.join('/TestFolder', 'subfolder', 'test.txt');

console.log(filePath);

const basepath = path.basename(filePath);
console.log(basepath);

const absolutePath = path.resolve(
  __dirname,
  'content',
  'subfolder',
  'test.txt'
);
console.log(absolutePath);
