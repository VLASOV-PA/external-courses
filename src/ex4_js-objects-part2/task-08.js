let strToLowerCamelCase = function(str){
	let arrayStr = str.split(" ");
  arrayStr[0] = arrayStr[0].toLowerCase() ;

  // Set the upper case for the first letters of words
	for(let i=1;i<arrayStr.length;i++){
    let substr = arrayStr[i] 
		arrayStr[i] = substr[0].toUpperCase() + substr.slice(1);
	}

  // Set the lower case for the remaining letters of the words
  for(let i=0;i<arrayStr.length;i++){
    let substr = arrayStr[i];
    let sliceSubstr = substr.slice(1);
    arrayStr[i] = substr[0] + sliceSubstr.toLowerCase()
  }

  let finalString = arrayStr.join(" ");
	return finalString.replace(/\s+/g, '');
}
module.exports = strToLowerCamelCase;
