let number = 0;
let prevButton = document.querySelector('.buttons .prev'),
 nextButton = document.querySelector('.buttons .next');
let images = document.querySelectorAll('.photo img');
prevButton.onclick = function(){
   images[number].className = "";
    number--;
    if( number < 0){
      number = images.length - 1;  
    }
    images[number].className = "current";
};
nextButton.onclick = function(){
    images[number].className = "";
    number++;
    if( number >= images.length){
      number = 0;  
    }
    images[number].className = "current";
};