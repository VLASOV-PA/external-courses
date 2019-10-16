function oddAndEvenElements(arr){
  let even = 0 ,odd = 0 ,zero = 0;
  for (let i=0 ; i < arr.length; i++){
    if (typeof arr[i]=== "number"){
      if (arr[i]=== 0 ){
        zero += 1;
      } else if (arr[i] % 2 === 0 ){
        even += 1;
      } else if (arr[i] % 2 === 1 ){
        odd += 1;
      } else continue
    }
  } 
  console.log([even,odd,zero]);
  return [even,odd,zero];
}
module.exports = oddAndEvenElements;

