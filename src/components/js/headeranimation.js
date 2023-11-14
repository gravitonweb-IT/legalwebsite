window.onscroll = function() {
  if (window.matchMedia("(min-width:1200px)").matches) {
    scrollFunction1();
    removeattr ();
  }
  else{
    addattr()
  }
};

function scrollFunction1() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementsByClassName("navbar  bootsnav")[0].style.boxShadow = "none";
    document.getElementsByClassName("navbar  bootsnav")[0].style.backgroundColour = "rgba(0,0,0, 0.4);";
    var y = document.getElementsByClassName('mytext')[0];
    y.style.marginTop = '0px';
    var pa = document.getElementsByClassName('sidebarmain')[0];
    pa.style.top = '0px';
    var a = document.getElementsByClassName('mytext1')[0];
    a.style.marginTop = '0px';
    var b = document.getElementsByClassName('mytext2')[0];
    b.style.marginTop = '0px';
    var c = document.getElementsByClassName('mytext3')[0];
    c.style.marginTop = '0px';
    var d = document.getElementsByClassName('mytext4')[0];
    d.style.marginTop = '0px';
    var e = document.getElementsByClassName('mytext5')[0];
    e.style.marginTop = '0px';
    var ki = document.getElementsByClassName('mytext6')[0];
    ki.style.marginTop = '0px';
    var uit = document.getElementsByClassName('mytext7')[0];
    uit.style.marginTop = '0px';
    var f = document.getElementsByClassName('sidemenuicon')[0];
    f.style.marginTop = '-41px';
    var pal = document.getElementsByClassName('pal')[0];
    pal.style.marginTop = '-20px';
    var g = document.getElementsByClassName('navSearchbaricon')[0];
    g.style.marginTop = '-40px';
    var h = document.getElementsByClassName('mainlogo')[0];
    h.style.width = '130px';
    h.style.marginTop = '-6px';
    var x = document.getElementById('trackservicediv');
    x.style.display = 'none';
    var p = document.getElementsByClassName('popupsearchbar')[0];
    p.style.marginTop = '55px';
  } else {
    document.getElementsByClassName("navbar  bootsnav")[0].style.boxShadow = " 0px 1px 29px -6px rgba(0,0,0,0.35)";
    document.getElementsByClassName("navbar")[0].style.backgroundColour = "white";
    var y = document.getElementsByClassName('mytext')[0];
    y.style.marginTop = '50px';
    y.style.paddingBottom = '8px';
    var a = document.getElementsByClassName('mytext1')[0];
    a.style.marginTop = '50px';
    a.style.paddingBottom = '8px';
    var pa = document.getElementsByClassName('sidebarmain')[0];
    pa.style.top = '0px';
    var b = document.getElementsByClassName('mytext2')[0];
    b.style.marginTop = '50px';
    b.style.paddingBottom = '8px';
    var c = document.getElementsByClassName('mytext3')[0];
    c.style.marginTop = '50px';
    c.style.paddingBottom = '8px';
    var d = document.getElementsByClassName('mytext4')[0];
    d.style.marginTop = '50px';
    d.style.paddingBottom = '8px';
    var e = document.getElementsByClassName('mytext5')[0];
    e.style.marginTop = '50px';
    e.style.paddingBottom = '8px';
    var ol = document.getElementsByClassName('mytext6')[0];
    ol.style.marginTop = '50px';
    ol.style.paddingBottom = '8px';
    var uitilities = document.getElementsByClassName('mytext7')[0];
    uitilities.style.marginTop = '50px';
    uitilities.style.paddingBottom = '8px';
    var f = document.getElementsByClassName('sidemenuicon')[0];
    f.style.marginTop = '22px';
    var pal = document.getElementsByClassName('pal')[0];
    pal.style.marginTop = '13px';
    var g = document.getElementsByClassName('navSearchbaricon')[0];
    g.style.marginTop = '24px';
    var h = document.getElementsByClassName('mainlogo')[0];
    h.style.width = '207px';
    h.style.marginTop = '2px';
    var x = document.getElementById('trackservicediv');
    x.style.display = 'block';
    var p = document.getElementsByClassName('popupsearchbar')[0];
    p.style.marginTop = '94px';
  }
}

function addattr () {
    document.getElementsByClassName("m_togle")[0].setAttribute("data-toggle", "dropdown");
    document.getElementsByClassName("m_togle")[1].setAttribute("data-toggle", "dropdown");
    document.getElementsByClassName("m_togle")[2].setAttribute("data-toggle", "dropdown");
    document.getElementsByClassName("m_togle")[3].setAttribute("data-toggle", "dropdown");
    document.getElementsByClassName("m_togle")[4].setAttribute("data-toggle", "dropdown");
    document.getElementsByClassName("m_togle")[5].setAttribute("data-toggle", "dropdown");
    document.getElementsByClassName("m_togle")[6].setAttribute("data-toggle", "dropdown");
    document.getElementsByClassName("m_togle")[7].setAttribute("data-toggle", "dropdown");

  
}

function removeattr ()
{
  document.getElementsByClassName("m_togle")[0].removeAttribute("data-toggle");
  document.getElementsByClassName("m_togle")[1].removeAttribute("data-toggle");
  document.getElementsByClassName("m_togle")[2].removeAttribute("data-toggle");
  document.getElementsByClassName("m_togle")[3].removeAttribute("data-toggle");
  document.getElementsByClassName("m_togle")[4].removeAttribute("data-toggle");
  document.getElementsByClassName("m_togle")[5].removeAttribute("data-toggle");
  document.getElementsByClassName("m_togle")[6].removeAttribute("data-toggle");
  document.getElementsByClassName("m_togle")[7].removeAttribute("data-toggle");

} 

// if( $(window).width() <= $("#mob_view").width(500) ){
//   $("#mob_view").css("display", "block")
// }




