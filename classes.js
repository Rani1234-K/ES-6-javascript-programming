class Myclass{
  // class must have a constructor for defining the public members
  // all public members from the constructor will be prefixed with 'this'

    constructor(v){
     this.Str = ''; //public string
    }

    //default access specifier for the class functions is public
     reverse(){
         let res = '';
         for(let i =this.Str.length;i>0;i--){
             res+=this.Str[i];
         }
         return res;
     }

}

// creating an instance of the class
let obj = new Myclass("ES6");
console.log('reverse of ES6 is = ${obj.reverse()}');
