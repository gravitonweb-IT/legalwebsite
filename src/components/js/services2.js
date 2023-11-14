jQuery(function() {
    jQuery('.Categorysingle').click(function() {
      jQuery('.CategoryDiv').hide();
      jQuery('#Category' + $(this).attr('target')).show();
    });
  });
  window.onscroll = function() {
  scrollFunction5();
    if (window.matchMedia("(min-width:1200px)").matches) {
      scrollFunction1();
    }
  };

  var mybutton = document.getElementById("freeconsultationBtn");
  function scrollFunction5() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
      mybutton.style.display = "block";
      var paw = document.getElementsByClassName('sidebar-contact')[0];
      paw.style.display = "block";
    } else {
      mybutton.style.display = "none";
      var paw = document.getElementsByClassName('sidebar-contact')[0];
      paw.style.display = "none";
    }
  }
  function scrollFunction1() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
      var y = document.getElementsByClassName('mytext')[0];
      y.style.marginTop = '0px';
      var pop = document.getElementsByClassName('animationhr')[0];
      pop.style.top = '-35px';
      pop.style.height = '33.5px';
      var pal3 = document.getElementsByClassName('serviceheader')[0];
      pal3.style.visibility = 'visible';
      pal3.style.marginTop = '0px';
      pal3.style.padding = '2px 2px 1px 2px';
      var pa = document.getElementsByClassName('sidebarmain')[0];
      pa.style.top = '0px';
      var pe = document.getElementsByClassName('languageicon')[0];
      pe.style.top = '56px';
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
      var ew = document.getElementsByClassName('mytext6')[0];
      ew.style.marginTop = '0px';
      var zl0 = document.getElementsByClassName('mytext7')[0];
      zl0.style.marginTop = '0px';
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
      var pal = document.getElementsByClassName('serviceheader')[0];
      pal.style.marginTop = '40px';
      pal.style.visibility = 'hidden';
      pal.style.padding = '2px 2px 1px 2px';
      var pop = document.getElementsByClassName('animationhr')[0];
      pop.style.top = '-35px';
      pop.style.height = '33.5px';
      document.getElementsByClassName("navbar  bootsnav")[0].style.boxShadow = " 0px 1px 29px -6px rgba(0,0,0,0.35)";
      document.getElementsByClassName("navbar")[0].style.backgroundColour = "white";
      var pe = document.getElementsByClassName('languageicon')[0];
      pe.style.top = '103px';
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
      var z = document.getElementsByClassName('mytext6')[0];
      z.style.marginTop = '50px';
      z.style.paddingBottom = '8px';
      var zl = document.getElementsByClassName('mytext7')[0];
      zl.style.marginTop = '50px';
      zl.style.paddingBottom = '8px';
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





  $(window).scroll(function() {
          var scrollDistance = $(window).scrollTop();
      scrollDistance=scrollDistance+90;
          $('.page-section').each(function(i) {
                  if ($(this).position().top <= scrollDistance) {

            $('.serviceheader a').eq(i).trigger( "click" );
            $('.serviceheader a').css("color", "#141F38");
              $('.serviceheader a').eq(i).css("color", '#fff');

          }

          });
  }).scroll();
