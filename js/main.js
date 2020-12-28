
// Add active class to the current button (highlight it)
var header = document.getElementById("main-nav").classList("nav-btn");
var btns = classList('nav-btn');
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

// ----------------------
// open studio
//-----------------------



function bigImg(x) {
  x.style.height = "300px";
  x.style.width = "290px";
}

function normalImg(x) {
  x.style.height = "220px";
  x.style.width = "220px";
}



function changepic1(x) {
  x.src ="images/about-1.jpg" ;
}

function changpic2(x) {
  x.src ="images/about-2.jpg";
}

