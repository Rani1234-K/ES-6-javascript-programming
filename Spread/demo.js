function dowork(values){
    let sum = 0;
    if (values.length>0) {
        values.forEach ((n,idx)=> {
            
                sum+=n;

        } );
            
        
    }
   return sum;
}
console.log('Add 2 ${dowork([1,2])}');
console.log('Add 3 ${dowork([1,2])}');

function doworkspread(...values){
    let sum = 0;
    if (values.length>0) {
        values.forEach ((n,idx)=> {            
                sum+=n;
        });

}
 return sum;

 console.log('Add Spread 2 $(doWorkSpread(1,2))');
 console.log('Add Spread 2 $(doWorkSpread(1,2,3))');

 console.log();
 console.log();
 let arr =[10,20,30];
 console.log(arr);
 arr = [...arr,40,50,60,70];//arrwill be spread with new values in it
 console.log(arr);