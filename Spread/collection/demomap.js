let simpleMap = new Map();
simpleMap.set(1, 'sean connary');
simpleMap.set(2, 'george connary');
simpleMap.set(3, 'sii connary');
simpleMap.set(4, 'scarty connary');
simpleMap.set(5, 'jiuyt connary');
console.log('size =$(simplMap.size)'); // output is 5

let roles = new Map([ 
    ['r1', 'User'], 
    ['r2', 'Guest'], 
    ['r3', 'Admin'], 
 ]);  
 console.log(roles.get('r2')) // output is guest

 //simpleMap.forEach((v,i)) =>{
     //  console.log('key = $(i) and value = $ (v)');

 //};

 console.log ('Is key present $ {SimpleMap.has(5)}');
 console.log ('Read value for key 5 ${simpleMap.get(5)}');


 let weakSet = new WeakSet();  
   let obj = {msg:"hello"}; 
   weakSet.add(obj); 
   console.log(weakSet.has(obj)); // output is true
   weakSet.delete(obj); 
   console.log(weakSet.has(obj)); // false

   let database = new Map();
   database.set(1, {actorid: 101, name: "watson meley", movies: 2, fees:450000});
   database.set(1, {actorid: 102, name: "Aatson meley", movies: 5, fees:450000});
   database.set(1, {actorid: 103, name: "eatson meley", movies: 6, fees:450000});
   database.set(1, {actorid: 104, name: "ssatson meley", movies: 5, fees:450000});
   database.set(1, {actorid: 105, name: "dftson meley", movies: 2, fees:450000});

   