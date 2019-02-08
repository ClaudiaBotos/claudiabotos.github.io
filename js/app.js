
//Creating a smooth scroll effect on links
$(document).ready(function(){
  //add smoth scroll to all links
$('nav a , .arrow-scroll').on('click', function(event){



  // We have to make sure this.hash has value before overriding default behavior
  if(this.hash !== " ") {
    //Prevent default anchor click behavior
    event.preventDefault();
    //Store hash (#)
    var hash = this.hash;



  //Use jQuery's animate() method to add the smooth scroll effect
  // The optional number (800) specifies the number of miliseconds it takes to scroll the the specific area
    $("html, body").animate({
      scrollTop: $(hash).offset().top }, 800, function() {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;

    });
  }// END if

});
});

//END of smooth scroll


//Creating a sticky navigation on scroll






//Creating a typewriter animation on my hero text

let i= 0;
let text ='Front-end Developer based in Turnhout, Belgium';


function typeWriter() {
  if(i< text.length) {
    document.getElementById('hero-text').innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100 );




  }
};

typeWriter();



// Initialize AOS Plug-in for animation scroll effects

AOS.init({
  duration: 800,
});
