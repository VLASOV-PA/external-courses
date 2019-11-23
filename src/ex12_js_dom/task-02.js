let isOpen=false;
  let profile= document.getElementById("profile");
  let arrow=document.getElementById("arrow");
  profile.onclick = function(){
    if (isOpen) {
      let ul=document.getElementById('ul');
      ul.remove();
      isOpen=false;
      arrow.style.transform="rotate(0deg)";
      return;
  }
  let main = document.getElementById('main');
  let ul = document.createElement('div');
  ul.id="ul";
  let liOne= document.createElement('div');
  liOne.className="li";
  let liTwo= document.createElement('div');
  liTwo.className="li";
  let liThree= document.createElement('div');
  liThree.className="li";
  liOne.innerHTML="My account";
  liTwo.innerHTML="Tasks";
  liThree.innerHTML="Log out";
  main.prepend(ul);
  ul.prepend(liOne);
  liOne.after(liTwo);
  ul.append(liThree);
  arrow.style.transform="rotate(180deg)";
  isOpen=true;
  }