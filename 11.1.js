function countElementTypes(arr) {
    let evenCount = 0;
    let oddCount = 0;
    let zeroCount = 0;
  
    arr.forEach((element) => {
      if (typeof element === 'number') {
        if (element === 0) {
          zeroCount++;
        } else if (element % 2 === 0) {
          evenCount++;
        } else {
          oddCount++;
        }
      }
    });
  
    console.log(`Even elements: ${evenCount}`);
    console.log(`Odd elements: ${oddCount}`);
    console.log(`Zero elements: ${zeroCount}`);
  }