const sales = [
  { price: 1000, discount: 0.1},
  { price: 500, discount: 0.05},
  { price: 100}
];
let summary = sales.map(sales =>{
  if(sales.discount === undefined){
    netPrice = sales.price
  }else{
    netPrice = sales.price - (sales.price * sales.discount)
  }
  return {netPrice : netPrice}
})
console.log(summary)
// const summary = [
//   {netPrice: 900},
//   {netPrice: 475},
//   {netPrice: 100}
// ];
