function randMinMax(min,max){
	return ~~((Math.random() * (max - min)) + min);
}
module.exports = randMinMax;
