function filterAnalog (array, callback,thisArg) {
  let filterResults = [];
  for (let i = 0; i < array.length; i++) {
    if (callback.call(thisArg, array[i], i, array)) {
      filterResults.push(array[i]);
    }
  }
  return filterResults;
};
module.exports = filterAnalog;