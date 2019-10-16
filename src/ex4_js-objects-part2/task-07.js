function trimToSmallerString(str,num){
  if (num < str.length ){
    return str.slice(0,num - 1) + "…";
  } 
  return str;
}
module.exports = trimToSmallerString;