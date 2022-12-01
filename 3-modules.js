//Modules
//Commonjs node used commonjs internally , every file in node is a module
//Modules - Encapsulate code , only share minimum

const nameslist=require('./4-name')
const sayHi=require('./5-utils')
const data=require('./6-alternative-flavor')
require('./7-mind-grenade')
console.log(nameslist);

console.log(data);


sayHi('Susan')
sayHi(nameslist.peter)
sayHi(nameslist.john)

