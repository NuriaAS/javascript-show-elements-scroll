var scroll = window.requestAnimationFrame ||
             
function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.animated'); 

function loop() {

    Array.prototype.forEach.call(elementsToShow, function(element){
      if (isElementInViewport(element)) {
        element.classList.add('showTop');
        element.style.opacity = 1;
      }
    });

    scroll(loop);
}


loop();


function isElementInViewport(el) {

  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}

$(document).ready(function() {
	
	$(".project__image__container a").click(function() {
		var url = $(this).attr("href");
    $(".project-pop-up").load(url);
    $(".project-pop-up").css("display", "block");
   
    if($(".project-pop-up").css("display", "block")) {
      $("body").css("overflow-y", "hidden");
      $(".project-pop-up__close").css("display", "block");
    }else {
     
    }
		return false;
	});
  $(".project-pop-up__close").click(function() {
    $(this).css("display", "none");
    $(".project-pop-up").css("display", "none");
    $("body").css("overflow-y", "scroll");
  })
			
}); 



