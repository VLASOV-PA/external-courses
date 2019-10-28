  let nowResult = 0;
  let calculator = {
    add(arg = 0){
      nowResult += arg;
      return calculator.add;
    },
    subtract(arg = 0){
      nowResult -= arg;
      return calculator.subtract;
    },
    divide(arg = 0){
      nowResult /= arg;
      return calculator.divide;
    },
    multiply(arg = 0){
      nowResult *= arg;
      return calculator.multiply;
    },
    getResult(){
      return nowResult;
    },
    reset(){
      nowResult = 0;
      return 0;
    },
  }    
module.exports = calсulator;