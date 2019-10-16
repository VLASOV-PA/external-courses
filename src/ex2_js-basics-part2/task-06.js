function checkOfNumber(number){
  if (number > 1000 || typeof number !== "number" || number < 0 ){
    return "Данные неверны";
  } else if (number === 0 || number === 1){
    return "0 и 1 не являются простым или составным числом!";
  }  
  let isSimple = true;
  for (let divider = 2; divider < number; divider++){
      if (number % divider === 0 ){
        return `Число ${number} - составное число`;
        isSimple = false;
        break;
      } 
    } 
    if (isSimple === true){
    return `Число ${number} - простое число` ;
  }
  return 0;
}
module.exports = checkOfNumber;