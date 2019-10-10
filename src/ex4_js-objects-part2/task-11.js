function calcCountUniqueSymbols(str){
	let uniqueSymbols = [];
	let strArray = str.split("");
	for(let i = 0; i < strArray.length; i++){
		let isUnique = true;
		for (let j = 0; j < uniqueSymbols.length; j++){
			if(strArray[i] === uniqueSymbols[j]) isUnique = false;
		}
		if(isUnique) uniqueSymbols.push(strArray[i]);
	}
	
	for(let i = 0;i<uniqueSymbols.length;i++){
		let count = 0;
		for(j = 0;j<strArray.length;j++){
			if(uniqueSymbols[i] === strArray[j]) count++;		
		}
		console.log(uniqueSymbols[i] + ": " + count);
	}
}
module.exports = calcCountUniqueSymbols;