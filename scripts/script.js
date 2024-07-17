function navBtnHover(n) {
  navBtnShow = "navBtnShow" + n;
  document.getElementById("opacity").style.display = "block";
  document.getElementById(navBtnShow).style.display = "block";
}

function navBtnHoverOut(n) {
  navBtnShow = "navBtnShow" + n;
  document.getElementById("opacity").style.display = "none";
  document.getElementById(navBtnShow).style.display = "none";
}
