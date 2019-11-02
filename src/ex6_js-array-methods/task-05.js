function mapAnalog(array, callback, thisArg) {
let mapResults = [];
  for (let i = 0; i < array.length; i++) {
    mapResults.push(callback.call(thisArg, array[i], i, array));
  }
  return mapResults;
};
module.exports = mapAnalog; 