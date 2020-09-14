let animated = document.querySelectorAll(".animated");
function showOnScroll() {
    let scrollTop = document.documentElement.scrollTop;
    console.log(scrollTop)
    for (var i = 0; i < animated.length; i++) {
        let heightAnimated = animated[i].offsetTop;
       console.log(heightAnimated)
        if (heightAnimated - 300 > scrollTop) {
            animated[i].style.opacity = 1;
            animated[i].classList.add("showTop")
            console.log("APARECE")
        }
        
    }
}
window.addEventListener('scroll', showOnScroll);

