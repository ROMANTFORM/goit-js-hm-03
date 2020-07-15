const countTotalSalary = function(employees) {
    let totalSalary = Object.values(employees);
    // console.log(totalSalary);
    let total = 0;
    
    for(const number of totalSalary) {
        // console.log(number);
        total += number;
    }
    console.log(total);
  };
  
  
  console.log(countTotalSalary({})); // 0
  
  console.log(
    countTotalSalary({
      mango: 100,
      poly: 150,
      alfred: 80,
    }),
  ); // 330
  
  console.log(
    countTotalSalary({
      kiwi: 200,
      lux: 50,
      chelsy: 150,
    }),
  ); // 400