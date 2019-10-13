function searchInPrototype(propertyName,objectName){
for (let key in objectName) {
    if (!objectName.hasOwnProperty(propertyName)){ 
      if (propertyName in objectName){
      return objectName[propertyName];
      } 
    }  
}
return undefined
}
module.exports = searchInPrototype;