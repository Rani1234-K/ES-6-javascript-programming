let dt = new Date(); // provide the default current date as per default OS.settings. The month will start from 1 (jan)
 
console.log(dt);
dt = new Date("2021-08-24"); // setting the date march month (03)
console.log(dt);

dt = new Date("2021/08/24");//supported ISO format from ES 6+
console.log(dt);

dt = new Date ("April 11 2021");// Long Date
console.log(dt);

