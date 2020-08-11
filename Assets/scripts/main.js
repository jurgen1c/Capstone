function navShow() {
  var x = document.getElementById("nav-links");
  if(x.style.display === "block") {
    x.style.display = "none";
  }
  else {
    x.style.display = "block";
  }
}
/*const navShow = () => {
  const burger = document.querySelector(".navbar-btn");
  const nav = document.querySelector('.nav-links');
  const navLink = document.querySelectorAll('.nav-li');

  
  burger.addEventListener('click',() => {
    //Toggle Nav
    nav.classList.toggle('.nav-links');

    //Change Links
    navLink.forEach((link, index) => {
      link.style.background = 'rgb(248, 187, 75)';
      link.style.color = 'rgb(0, 18,41)'
      link.style.border = '1px solid rgb(0, 18,41)'
    });
  });
}

navShow();

const parent = document.querySelector('nav-links');
const burger = document.getElementById('#navbar-btn');

burger.addEventListener('click', function(){
  let navStatus = parent.style.display;
  if (navStatus === "flex") {
    parent.style.display = "none";
  }else {
    parent.style.display = "felx";
  }
});

*/

