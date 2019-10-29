function sliceAnalog(array,begin,end){
  let arrayCopy = [], elem = 0, newBegin = begin, newEnd = end;
  if (end > array.length) newEnd = array.length;
  if (begin < 0 && Math.abs(begin) <= array.length){
    newBegin = array.length - Math.abs(begin);
  }
  if (end < 0 ) newEnd = array.length - Math.abs(end);
  if (Math.abs(begin) > array.length && (begin < 0)) newBegin = 0;

  if (arguments.length === 3){
     for (let i = newBegin; i < newEnd; i++){
       arrayCopy[elem] = array[i];
       elem++;
  }
  }

  if (arguments.length === 2){
    for (let i = newBegin; i < array.length; i++){
      arrayCopy[elem] = array[i];
      elem++;
    }
  }  

  if (arguments.length === 1){
    return array
  }

  return arrayCopy;
  }
module.exports = sliceAnalog;