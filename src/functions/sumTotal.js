const sumTotal = (array) => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = array.reduce(reducer, 0);
    return sum.toFixed(2);
  };
  
  export default sumTotal;