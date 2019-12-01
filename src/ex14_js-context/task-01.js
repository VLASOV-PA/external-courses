class Calculator {
  constructor() {
    this.nowResult = 0;
  }
   add(arg=0) {
      this.nowResult += arg;
      return this;
  }
  subtract(arg = 0) {
     this.nowResult -= arg;
     return this;
  }
   multiply(arg = 1){
      this.nowResult *= arg;
      return this;
  }
  divide(arg = 1) {
      this.nowResult /= arg;
      return this;
  }
  setState(arg=0) {
    this.nowResult = arg;
    return this;
  }
  getResult() {
    return this.nowResult;
  }
  reset() {
    this.nowResult = 0;
    return this;
  }
  fetchData(callback) {
    setTimeout(() => {
      callback(500);
    },1000);
    return this;
  }
}
let calculator = new Calculator();
module.exports = calculator;
