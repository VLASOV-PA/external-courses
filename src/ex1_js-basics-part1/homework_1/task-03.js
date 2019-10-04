function calcElements(arr){
  let chet = 0 ,nechet = 0 ,zero = 0;
  for (let i=0 ; i < arr.length; i++){
    if (typeof arr[i]=== "number"){
      if (arr[i]=== 0 ){
        zero += 1;
      } else if (arr[i] % 2 === 0 ){
        chet += 1;
      } else if (arr[i] % 2 === 1 ){
        nechet += 1;
      } else continue
    }
  } 
  console.log([chet,nechet,zero]);
  return [chet,nechet,zero];
}
module.exports = calcElements;

