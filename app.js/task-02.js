const countProps = function(obj) {
    
    let totalValues = 0;
    const values = Object.values(obj);
     
    totalValues = values.length;
    return totalValues;

  };
  
 
  console.log(countProps({})); // 0
  
  console.log(countProps({ name: 'Mango', age: 2 })); // 2
  
  console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3
