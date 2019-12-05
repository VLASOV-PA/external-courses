function Sweet(name,weigth,fats){
    this.name=name;
    this.weigth=weigth;
    this.fats=fats;
  }
   function Candy(isCandy){
    this.isCandy=isCandy;
  }
  Candy.prototype=new Sweet();
  function Marmalade(name){
    this.name=name;
  }
  Marmalade.prototype=new Sweet();
  function Present(sweets){
    this.sweets=sweets;
  }
  Present.prototype.searchSweet=function(name){
    for(let number=0;number<this.sweets.length;number++){
      if(this.sweets[number].name===name){
        return this.sweets[number];
      }
    }
    return 'Нет такой конфеты';
  };
  Present.prototype.getFats=function(){
    let fats=0;
    this.sweets.forEach(elem=>{
      fats+=elem.fats;
    });
    return fats;
  }
  Present.prototype.sortFats=function(){
   return this.sweets.sort(function(first,second){
     return first.fats - second.fats});
  };
 
  