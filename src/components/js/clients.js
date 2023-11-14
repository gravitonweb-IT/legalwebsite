$(window).on('load', function () {
    var images = [
        'images/clients/Layer -1 (1).svg', 'images/clients/1.svg', 'images/clients/2.svg', 'images/clients/3.svg', 'images/clients/4.svg', 'images/clients/5.svg', 'images/clients/6.svg', 'images/clients/7.svg', 'images/clients/8.svg',
        'images/clients/9.svg',
        'images/clients/10.svg', 'images/clients/11.svg', 'images/clients/12.svg', 'images/clients/13.svg', 'images/clients/14.svg'
    ];
    var images2 = [
        'images/clients/15.svg',
        'images/clients/amazon-icon.svg', 'images/clients/googleplus.svg', 'images/clients/java-ar21.svg',
        'images/clients/steam-icon-logo.svg', 'images/clients/twitter-3.svg', 'images/clients/air-king.svg', 'images/clients/audi.svg', 'images/clients/whatsapp-icon.svg', 'images/clients/facebook-icon.svg', 'images/clients/shell-ar21.svg',
        'images/clients/Layer 2 (3).svg', 'images/clients/google-icon.svg', 'https://wappgo.com/text.svg'
    ];
    var images3 = ['images/clients/1.svg','images/clients/2.svg','images/clients/3.svg','images/clients/4.svg','images/clients/5.svg','images/clients/6.svg','images/clients/7.svg'];
    var unique = ['images/clients/15.svg','https://wappgo.com/text.svg','images/clients/amazon-icon.svg','images/clients/googleplus.svg','images/clients/java-ar21.svg','images/clients/steam-icon-logo.svg'];
    var timeoutVar;
    var first = "";
    var second = "";
    var j = 7;
    var z = 6;
    var chang;
    var chang1;

    function changerandom() {
        first = images[Math.floor(Math.random() * images.length) + 0];

         verify(first);

    }

    function verify(first) {
        var a = images3.indexOf(first);

        if (a == -1) {
            images3[j] = first;
            j++;
            chang=first;

        } else if (j >= images.length) {
            images3 = [];
            j = 0;

            for(var b=0;b<13;b++)
            {var p= b.toString();
             var uoi=$(".change" + p).attr("src");
             if(images.indexOf(uoi)!=-1)
         {   images3[j] = uoi;
            j++;}
        }

            changerandom();
        } else {
            changerandom();
        }
    }


    function changerandom2() {
        second = images2[Math.floor(Math.random() * images2.length) + 0];

        second = verify2(second);


    }

    function verify2(second) {
        var a = unique.indexOf(second);

        if (a == -1) {
            unique[z] = second;
            z++;

            chang1=second;
        } else if (z >= images2.length) {
            unique = [];
            z = 0;

            for(var b=0;b<13;b++)
            {var p= b.toString();
             var uoi=$(".change" + p).attr("src");

             if(images2.indexOf(uoi)!=-1)
            {unique[z] = uoi;
            z++;}
        }

            changerandom2();
        } else {
            changerandom2();
        }
    }



    function changeimage() {
        clearTimeout(timeoutVar);
          changerandom();
         changerandom2();
        var n1 = Math.floor(Math.random() * 13);
        var n2 = Math.floor(Math.random() * 13);

        if (n1 == n2) {
            var n2 = Math.floor(Math.random() * 13);
        }

        var m1 = n1.toString();
        var m2 = n2.toString();


        $('.change' + m1).fadeOut(500);


        setTimeout(() => {
            $('.change' + m1).attr('src', chang).fadeIn(500);
        }, 1000);





        $('.change' + m2).fadeOut(500);

        setTimeout(() => {
            $('.change' + m2).attr('src', chang1).fadeIn(500);
        }, 1000);



        timeoutVar = setTimeout(changeimage, 3000);



    };

    changeimage();

});







