const fs = require('fs');
console.log(process.argv);
const folderName = process.argv[2];

try {
  fs.mkdirSync(folderName);
  fs.writeFileSync(`${folderName}/index.html`, '');
  fs.writeFileSync(`${folderName}/style.css`, '');
  fs.writeFileSync(`${folderName}/app.js`, '');
}catch (e) {
console.log('error occured :',e);
}
