function getExpression (type) {
	if (typeof type ==="string") {
		return "string";
	} else if (typeof type ==="number" && !isNaN(type)) {
		return "number"; 
	}	return undefined;
}
module.exports = getExpression; 