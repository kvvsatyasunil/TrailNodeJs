const { readFile, writeFile } = require('fs');

console.log('start');
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const firstFileContent = result;
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const secondFileContent = result;
    writeFile(
      './content/writefile-async.txt',
      `Hi there new content :${firstFileContent}, ${secondFileContent}`,
      { flag: 'a' },
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('write done');
      }
    );
  });
});

console.log('End');
