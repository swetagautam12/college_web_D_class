const  http = require ("http");
const url = require(`url`);


const myurl ="https:localhost:3000/product?id =10& name=macbook";

const parseUrl = url.parse(myurl,true);

console.groupCollapsed(parseUrl);