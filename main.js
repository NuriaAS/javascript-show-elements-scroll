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
    $(".project-pop-up").css("display", "block")
		return false;
	});

			
}); 



