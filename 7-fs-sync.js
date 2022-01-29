const { readFileSync, writeFileSync } = require('fs');

console.log('stat');

const firstFileContent = readFileSync('./content/first.txt', 'utf8');
const secondFileContent = readFileSync('./content/second.txt', 'utf8');
console.log(secondFileContent);

writeFileSync(
  './content/writefile.txt',
  `Here is new content : ${firstFileContent}, ${secondFileContent}`,
  { flag: 'a' }
);
console.log('write done');
console.log('end of execution');
