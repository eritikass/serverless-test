'use strict';

const fs = require('fs');
const path = require('path');

const readFile = async (file, encoding='utf8') => new Promise(resolve => {
  const fullname = path.join(__dirname, file);
  console.log(fullname);
  fs.readFile(fullname, encoding, function(err, contents) {
    console.log(contents);
    resolve(contents);
  });
});

module.exports.frontpage = async () => {
  const html = await readFile('test1.html');
  return ({
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: html,
  });
};
