function isPrime(n) {
    if (n > 1000) {
      console.log("Данные неверны. Число должно быть не больше 1000.");
      return;
    }
  
    if (n <= 1) {
      console.log("Число не является простым.");
      return;
    }
  
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) {
        console.log("Число не является простым.");
        return;
      }
    }
  
    console.log("Число является простым.");
  }
  
  isPrime(10001);