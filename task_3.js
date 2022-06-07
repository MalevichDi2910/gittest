const squareList = arr => 
   arr.filter(item => item > 0 &&  Math.trunc(item) == item)
  .map(item => item ** 2);
  // arr.reduce((total, amount) => (amount > 0 && Math.trunc(amount) == amount) ? [...total, amount ** 2] : total, []);
const squaredIntegers = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);
console.log(squaredIntegers);
