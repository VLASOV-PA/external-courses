function searchInPrototype(propertyName,objectName){
for (let key in Object.getPrototypeOf(objectName)) {
  if (propertyName in Object.getPrototypeOf(objectName)){
  return Object.getPrototypeOf(objectName)[propertyName]
}
}
return undefined;
}
module.exports = searchInPrototype;