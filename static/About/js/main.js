
            
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("header");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("header_sticky_sticky")
  } else {
    navbar.classList.remove("header_sticky_sticky");
  }
}



function scroll_to_element(element,time= 1000){


    $(document).ready(function(){

              $('html, body').animate({ 
            scrollTop: $(element).offset().top 
            }, 1000);

        });

    
}

     
