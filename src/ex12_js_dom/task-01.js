let currentItem = 0;
let back = document.querySelector('.buttons .back'),
next = document.querySelector('.buttons .next');
let images = document.querySelectorAll('.photos img');
back.onclick = function(){
   images[currentItem].className = "";
   currentItem--;
    if( currentItem < 0){
      currentItem = images.length - 1;  
    }
    images[currentItem].className = "current";
};
next.onclick = function(){
    images[currentItem].className = "";
    currentItem++;
    if( currentItem >= images.length){
      currentItem = 0;  
    }
    images[currentItem].className = "current";
};
document.onkeydown=function(){
if (window.event.keyCode===9){
  document.onkeydown=next.onclick;
}
}

