class Employee {
    constructor() {
      this.name = 'Green';
    }
  }
  
  const poly1 = new Employee();
  
  console.log(poly1.name);

  const obj = {
      log: ['example','test','number'],
      get latest(){
        if (this.log.length === 0) return undefined;
        return this.log[this.log.length - 1];

      }
  }
  console.log(obj.latest);