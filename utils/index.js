const fs = require("fs"),
    path = require("path"),
    utilsMap = {};

fs
    .readdirSync(__dirname)
    .where(fileName => fileName != "index.js")
    .forEach(moduleName => utilsMap[moduleName] = require(path.join(__dirname, moduleName)));

module.exports = utilsMap;
    