let upperCaseAllFirstSymbols = function(str){
	let arrayStr = str.split(" ");
	for(let i=0;i<arrayStr.length;i++){
    let substr = arrayStr[i] 
		arrayStr[i] = substr[0].toUpperCase() + substr.slice(1);
	}
	return arrayStr.join(" ");
}
module.exports = upperCaseAllFirstSymbols;