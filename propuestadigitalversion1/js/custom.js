//CORRECTION of ANCHOR LINKS in CHROME
$(function() {
       $('a[href*="#"]:not([href="#"])').click(function() {
         if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
           var target = $(this.hash);
           target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html, body').animate({
               scrollTop: target.offset().top
             }, 400);
             return false;
           }
         }
       });
     });


// ACTIVE ELEMENTO ON MENU
$(document).ready(function() {
	//add active class on menu
	$('.menu > li').click(function(e) {
	e.preventDefault();
	$('li').removeClass('active');
	$(this).addClass('active');
	});
			
});
//VIDEO LIGHTBOX


//Script below onlt needed for local videos
//Below can go in run.js (May already be there)
$(document).on('lity:ready', function(event, instance) {
  //Play video on lightbox open
  var trigger = instance.opener();
  $('.lity').appendTo('body').addClass(trigger.data("target") + '-lightbox');
  if (instance.element().hasClass('video-lightbox')) {
    instance.element().find('video')[0].play();
  }
});
$(document).on('lity:close', function(event, instance) {
		// Pause videos on lightbox close
		var videos = instance.element().find('video');
		for(var i = 0; i < videos.length; i++){
			videos[i].pause();
		}
});

// PRINT

$('.print').on('click', function() {  
  window.print();  
  return false; // why false?
});




// GALLERY
$('.gallery').slickLightbox({
		    itemSelector: 'a.gal'
});

$('.gallery').slick({
     slidesToShow: 1,
     slidesToScroll: 1,
     autoplay: false,
     autoplaySpeed: 2000,
     slide:'.slide',
     mobileFirst: true,
     responsive: [
        {
           breakpoint: 767,
           settings: "unslick"
        }
     ]
  });


// Fixed menu after scroll
window.onscroll = function() {myFunction()};

var header = document.getElementById("menu");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}