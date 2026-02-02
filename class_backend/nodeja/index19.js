const http = require ("http");
const url = require("url");
const myUrl = "http://localhost:3000/product?id=10&name=macbook";
const parseUrl = url.parse(myUrl,true);
const server = 