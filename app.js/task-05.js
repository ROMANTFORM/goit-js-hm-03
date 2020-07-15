const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2 },
  ];

  const getAllPropValues = function(arr, prop) {

   let allName = [];
   let allQuantity = [];
   let allCategory = [];
    
    for (let product of products) {
        let values = Object.values(product);
       
        allName.push(values[0]);  
        allQuantity.push(values[2])

    }
       if (prop === 'name') {
           return allName;
       };
       if (prop === 'quantity') {
           return allQuantity;
       };
       if (prop === 'category') {
           return allCategory;
       };  
    
  };
  
  
  
  
  console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']
  
  console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]
  
  console.log(getAllPropValues(products, 'category')); // []