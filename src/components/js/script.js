var demo=0;
var demo2=0;
var rotation = 0;

jQuery.fn.rotate = function(degrees) {
    $(this).css({'-webkit-transform' : 'rotateX('+ degrees +'deg)',
                 '-moz-transform' : 'rotateX('+ degrees +'deg)',
                 '-ms-transform' : 'rotateX('+ degrees +'deg)',
                 'transform' : 'rotateX('+ degrees +'deg)'});
};




jQuery(function() {
  jQuery('.showSingle').click(function() {
    jQuery('.targetDiv').hide();
    if(demo==0)
{
  rotation += 0;
   $('.targetDiv').rotate(rotation);
demo+=1;
  }
  else
{
  rotation += 180;
    $('.targetDiv').rotate(rotation);
}
    jQuery('#div' + $(this).attr('target')).show();
    if(demo2==0)
{
  rotation += 0;
   $('.targetDiv').rotate(rotation);
demo2+=1;
  }
  else{
    rotation += 180;
    $('.targetDiv').rotate(rotation);
  }
  });
});

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

$("#a").click(function() {
  $("#one").addClass("active1");
  $("#two").removeClass("active1");
  $("#three").removeClass("active1");
  $("#four").removeClass("active1");
  $("#five").removeClass("active1");
  $("#six").removeClass("active1");
  $("#seven").removeClass("active1");
  $("#eight").removeClass("active1");
  $("#nine").removeClass("active1");
});
$("#b").click(function() {
  $("#two").addClass("active1");
  $("#one").removeClass("active1");
  $("#three").removeClass("active1");
  $("#four").removeClass("active1");
  $("#five").removeClass("active1");
  $("#six").removeClass("active1");
  $("#seven").removeClass("active1");
  $("#eight").removeClass("active1");
  $("#nine").removeClass("active1");
});
$("#c").click(function() {
  $("#two").removeClass("active1");
  $("#one").removeClass("active1");
  $("#three").addClass("active1");
  $("#four").removeClass("active1");
  $("#five").removeClass("active1");
  $("#six").removeClass("active1");
  $("#seven").removeClass("active1");
  $("#eight").removeClass("active1");
  $("#nine").removeClass("active1");
});
$("#d").click(function() {
  $("#two").removeClass("active1");
  $("#one").removeClass("active1");
  $("#three").removeClass("active1");
  $("#four").addClass("active1");
  $("#five").removeClass("active1");
  $("#six").removeClass("active1");
  $("#seven").removeClass("active1");
  $("#eight").removeClass("active1");
  $("#nine").removeClass("active1");
});
$("#e").click(function() {
  $("#two").removeClass("active1");
  $("#one").removeClass("active1");
  $("#three").removeClass("active1");
  $("#four").removeClass("active1");
  $("#five").addClass("active1");
  $("#six").removeClass("active1");
  $("#seven").removeClass("active1");
  $("#eight").removeClass("active1");
  $("#nine").removeClass("active1");
});
$("#f").click(function() {
  $("#two").removeClass("active1");
  $("#one").removeClass("active1");
  $("#three").removeClass("active1");
  $("#four").removeClass("active1");
  $("#five").removeClass("active1");
  $("#six").addClass("active1");
  $("#seven").removeClass("active1");
  $("#eight").removeClass("active1");
  $("#nine").removeClass("active1");
});
$("#g").click(function() {
  $("#two").removeClass("active1");
  $("#one").removeClass("active1");
  $("#three").removeClass("active1");
  $("#four").removeClass("active1");
  $("#five").removeClass("active1");
  $("#six").removeClass("active1");
  $("#seven").addClass("active1");
  $("#eight").removeClass("active1");
  $("#nine").removeClass("active1");
});
$("#h").click(function() {
  $("#two").removeClass("active1");
  $("#one").removeClass("active1");
  $("#three").removeClass("active1");
  $("#four").removeClass("active1");
  $("#five").removeClass("active1");
  $("#six").removeClass("active1");
  $("#seven").removeClass("active1");
  $("#eight").addClass("active1");
  $("#nine").removeClass("active1");
});
$("#i").click(function() {
  $("#two").removeClass("active1");
  $("#one").removeClass("active1");
  $("#three").removeClass("active1");
  $("#four").removeClass("active1");
  $("#five").removeClass("active1");
  $("#six").removeClass("active1");
  $("#seven").removeClass("active1");
  $("#eight").removeClass("active1");
  $("#nine").addClass("active1");
});

// Featured carousel
var $featCarousel = $(".js-feat-carousel");
$featCarousel.owlCarousel({
  loop: false,
  margin: 20,
  nav: true,
  navText: [
    "<i class='fa fa-angle-left'></i>",
    "<i class='fa fa-angle-right'></i>"
  ],
  autoplay: false,
  responsive: {
    0: {
      items: 1,
      dots: false,
      autoWidth: true
    },
    600: {
      items: 1,
      dots: false,
    },
    768: {
      items: 1,
      dots: false
    },
    800: {
      items: 2,
      dots: false
    },
    992: {
      items: 3,
      dots: false
    },
    1200: {
      items: 3,
      dots: false
    }
  }
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
$("#ab1").click(function() {
  $("#one1").addClass("activecolor").removeClass("legalcaroselheading");
  $("#two2").removeClass("activecolor").addClass("legalcaroselheading");
  $("#three3").removeClass("activecolor").addClass("legalcaroselheading");
  $("#four4").removeClass("activecolor").addClass("legalcaroselheading");
  $("#five5").removeClass("activecolor").addClass("legalcaroselheading");
  $("#six6").removeClass("activecolor").addClass("legalcaroselheading");
  $("#seven7").removeClass("activecolor").addClass("legalcaroselheading");
  $("#eight8").removeClass("activecolor").addClass("legalcaroselheading");
  $("#nine9").removeClass("activecolor").addClass("legalcaroselheading");
});
$("#ab2").click(function() {
  $("#two2").addClass("activecolor").removeClass("legalcaroselheading");
  $("#one1").removeClass("activecolor").addClass("legalcaroselheading");
  $("#three3").removeClass("activecolor").addClass("legalcaroselheading");
  $("#four4").removeClass("activecolor").addClass("legalcaroselheading");
  $("#five5").removeClass("activecolor").addClass("legalcaroselheading");
  $("#six6").removeClass("activecolor").addClass("legalcaroselheading");
  $("#seven7").removeClass("activecolor").addClass("legalcaroselheading");
  $("#eight8").removeClass("activecolor").addClass("legalcaroselheading");
  $("#nine9").removeClass("activecolor").addClass("legalcaroselheading");
});
$("#ab3").click(function() {
  $("#two2").removeClass("activecolor").addClass("legalcaroselheading");
  $("#one1").removeClass("activecolor").addClass("legalcaroselheading");
  $("#three3").addClass("activecolor").removeClass("legalcaroselheading");
  $("#four4").removeClass("activecolor").addClass("legalcaroselheading");
  $("#five5").removeClass("activecolor").addClass("legalcaroselheading");
  $("#six6").removeClass("activecolor").addClass("legalcaroselheading");
  $("#seven7").removeClass("activecolor").addClass("legalcaroselheading");
  $("#eight8").removeClass("activecolor").addClass("legalcaroselheading");
  $("#nine9").removeClass("activecolor").addClass("legalcaroselheading");
});
$("#ab4").click(function() {
  $("#two2").removeClass("activecolor").addClass("legalcaroselheading");
  $("#one1").removeClass("activecolor").addClass("legalcaroselheading");
  $("#three3").removeClass("activecolor").addClass("legalcaroselheading");
  $("#four4").addClass("activecolor").removeClass("legalcaroselheading");
  $("#five5").removeClass("activecolor").addClass("legalcaroselheading");
  $("#six6").removeClass("activecolor").addClass("legalcaroselheading");
  $("#seven7").removeClass("activecolor").addClass("legalcaroselheading");
  $("#eight8").removeClass("activecolor").addClass("legalcaroselheading");
  $("#nine9").removeClass("activecolor").addClass("legalcaroselheading");
});
$("#ab5").click(function() {
  $("#two2").removeClass("activecolor").addClass("legalcaroselheading");
  $("#one1").removeClass("activecolor").addClass("legalcaroselheading");
  $("#three3").removeClass("activecolor").addClass("legalcaroselheading");
  $("#four4").removeClass("activecolor").addClass("legalcaroselheading");
  $("#five5").addClass("activecolor").removeClass("legalcaroselheading");
  $("#six6").removeClass("activecolor").addClass("legalcaroselheading");
  $("#seven7").removeClass("activecolor").addClass("legalcaroselheading");
  $("#eight8").removeClass("activecolor").addClass("legalcaroselheading");
  $("#nine9").removeClass("activecolor").addClass("legalcaroselheading");
});
$("#ab6").click(function() {
  $("#two2").removeClass("activecolor").addClass("legalcaroselheading");
  $("#one1").removeClass("activecolor").addClass("legalcaroselheading");
  $("#three3").removeClass("activecolor").addClass("legalcaroselheading");
  $("#four4").removeClass("activecolor").addClass("legalcaroselheading");
  $("#five5").removeClass("activecolor").addClass("legalcaroselheading");
  $("#six6").addClass("activecolor").removeClass("legalcaroselheading");

  $("#seven7").removeClass("activecolor").addClass("legalcaroselheading");
  $("#eight8").removeClass("activecolor").addClass("legalcaroselheading");
  $("#nine9").removeClass("activecolor").addClass("legalcaroselheading");
});
$("#ab7").click(function() {
  $("#two2").removeClass("activecolor").addClass("legalcaroselheading");
  $("#one1").removeClass("activecolor").addClass("legalcaroselheading");
  $("#three3").removeClass("activecolor").addClass("legalcaroselheading");
  $("#four4").removeClass("activecolor").addClass("legalcaroselheading");
  $("#five5").removeClass("activecolor").addClass("legalcaroselheading");
  $("#six6").removeClass("activecolor").addClass("legalcaroselheading");
  $("#seven7").addClass("activecolor").removeClass("legalcaroselheading");

  $("#eight8").removeClass("activecolor").addClass("legalcaroselheading");
  $("#nine9").removeClass("activecolor").addClass("legalcaroselheading");
});
$("#ab8").click(function() {
  $("#two2").removeClass("activecolor").addClass("legalcaroselheading");
  $("#one1").removeClass("activecolor").addClass("legalcaroselheading");
  $("#three3").removeClass("activecolor").addClass("legalcaroselheading");
  $("#four4").removeClass("activecolor").addClass("legalcaroselheading");
  $("#five5").removeClass("activecolor").addClass("legalcaroselheading");
  $("#six6").removeClass("activecolor").addClass("legalcaroselheading");
  $("#seven7").removeClass("activecolor").addClass("legalcaroselheading");
  $("#eight8").addClass("activecolor").removeClass("legalcaroselheading");
  $("#nine9").removeClass("activecolor").addClass("legalcaroselheading");
});
$("#ab9").click(function() {
  $("#two2").removeClass("activecolor").addClass("legalcaroselheading");
  $("#one1").removeClass("activecolor").addClass("legalcaroselheading");
  $("#three3").removeClass("activecolor").addClass("legalcaroselheading");
  $("#four4").removeClass("activecolor").addClass("legalcaroselheading");
  $("#five5").removeClass("activecolor").addClass("legalcaroselheading");
  $("#six6").removeClass("activecolor").addClass("legalcaroselheading");
  $("#seven7").removeClass("activecolor").addClass("legalcaroselheading");
  $("#eight8").removeClass("activecolor").addClass("legalcaroselheading");
  $("#nine9").addClass("activecolor").removeClass("legalcaroselheading");
});
