const path = require("path");
console.log(__filename);
console.log(__dirname);
const filepath=path.join(__dirname,'test','hello','file.txt');
//join only path 

console.log(filepath);

const filepath1=path.resolve('test' ,'hello','file.txt');

console.log(filepath1);

const path1 = path.resolve('a','/b','c');

console.log(path1);
const path2=path.join('a','/b','')
