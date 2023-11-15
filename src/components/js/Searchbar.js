function func() {
        var input, search, ul, li, a, i, txtValue;
        input = document.getElementById("css");
        search = input.value;
        ul = document.getElementById("list");
        li = ul.getElementsByTagName("li");
        ul.style.display="block";


        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;


              var ab = search.charAt(0).toUpperCase();
              var cd = txtValue.charAt(0).toUpperCase();
              if (search.length > 3){
            if (ab===cd) {
                li[i].style.display = "block";

                for(k = 1; k < search.length; k++) {
                  var ab = search.charAt(k);
                  var cd = txtValue.charAt(k);
                  if (ab===cd) {
                      li[i].style.display = "block";
                    } else {
                        li[i].style.display = "none";
                        break;

    }
                }

            } else {
                li[i].style.display = "none";
            }
          } else{
            ul.style.display="none";
          }

        }

        if (search.length === 0) {
            ul.style.display = "none";
        }
    }
function func() {
    var input, search, ul, li, a, i, txtValue;
    input = document.getElementById("css");
    search = input.value.toUpperCase();
    ul = document.getElementById("list");
    li = ul.getElementsByTagName("li");
		ul.style.display="block";


    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        var ab = search.charAt(0).toUpperCase();
        var cd = txtValue.charAt(0).toUpperCase();
        if (search.length > 3){
        if (txtValue.toUpperCase().indexOf(search) > -1) {
            li[i].style.display = "block";
        } else {
            li[i].style.display = "none";
        }
      }else{
                   ul.style.display="none";
                }


    }

if (search.length === 0) {
    ul.style.display = "none";
}
}
