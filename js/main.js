
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
  x.style.height = "232px";
  x.style.width = "212px";
}


