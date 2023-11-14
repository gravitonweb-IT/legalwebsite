$("#hide").click(function() {
    $(".popupsearchbar").hide();
  });

  $("#show").click(function() {
    $(".popupsearchbar").show()
  });
  $(".subscribeemailpopupclose").click(function() {
    $(".subscribeemailpopup").hide()
  });

  $(".subscribeemail").click(function() {
    $(".subscribeemailpopup").show();
  });







var nav = document.getElementsByClassName("sidephoneform")[0];
var burger = document.getElementsByClassName("burger")[0];

if (burger) {
  burger.addEventListener("click", clicked);
}

var j = 0;

function closesideNav() {
  if (window.matchMedia("(min-width:992px)").matches) {
    nav.style = "right:-75.96vh";
    j--;
  } else {
    nav.style = "right:-75.96vw";
    j--;
  }
}

function clicked() {
  if (j === 0) {
    nav.style = "right:0";
    j++;
  } else {
    if (window.matchMedia("(min-width:992px)").matches) {
      nav.style = "right:-47.96vh";
      j--;
    } else {
      nav.style = "right:-67.96vw";
      j--;
    }
  }
}


var nav1 = document.getElementsByClassName("sidebarmain")[0];
var burger1 = document.getElementsByClassName("burger1")[0];

if (burger1) {
  burger1.addEventListener("click", clicked1);
}
var j1 = 0;

function closesidebarmain() {
  nav1.style = "right:-34.46vh";
  j1--;
}

function clicked1() {
  if (j1 === 0) {
    nav1.style = "right:0";
    j1++;
  } else {
    nav1.style = "right:-34.46vh";
    j1--;
  }
}
