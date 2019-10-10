let insertToStr = function(str,word,position){
	let masStr = str.split(" ");
	masStr.splice(position + 1,0,word);
	return masStr.join(" ");
}
module.exports = insertToStr;