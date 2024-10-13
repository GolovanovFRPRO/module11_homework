function createAdder(x) {
    return function(y) {
      return x + y;
    };
  }
  
  
  console.log(createAdder(9)(21)); 