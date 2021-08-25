const { set } = require("vue/types/umd");

let valueSet = new Set();
valueSet.add(10);
valueSet.add(20);
valueSet.add(30);
valueSet.add(40);
valueSet.add(50);
valueSet.add(10);

console.log('Length of valueSet = ${valueSet.size}');

console.log();

console.log(valueSet.values);
console.log('Is 60 available $ {valueSet.has(60)}');
console.log('Is 60 available $ {valueSet.has(10)}');


let valueObjects = new Set();
valueObjects.add({id:1,name:'A'});// seperate object locations
valueObjects.add({id:2,name:'A'});// seperate object locations
valueObjects.add({id:3,name:'A'});/// seperate object locations
valueObjects.add({id:4,name:'A'});// seperate object locations
valueObjects.add({id:1,name:'A'});// seperate object locations
console.log('size of valueObjects = ${valueObjects.size}');
