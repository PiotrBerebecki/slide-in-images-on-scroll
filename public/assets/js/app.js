const slidingImages = Array.from(document.querySelectorAll('.slide-in'));

window.addEventListener('scroll', debounce(checkSlide));


function checkSlide(e) {
  slidingImages.slice(0,1).forEach(slidingImage => {
    // bottom scroll position without half of the image
    const currentYPositionToStartSliding = window.scrollY + window.innerHeight - slidingImage.height / 2;
    
    // bottom of the image, does not change
    const imageBottom = slidingImage.offsetTop + slidingImage.height;
    
    const isHalfShown = currentYPositionToStartSliding > slidingImage.offsetTop;
    const isScrolledPast = window.scrollY > imageBottom;

    if (isHalfShown && !isScrolledPast) {
      slidingImage.classList.add('active');
    } else {
      slidingImage.classList.remove('active');
    }
  });
}


function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) { 
        func.apply(context, args);
      }
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    
    if (callNow) {
      func.apply(context, args);
    } 
  };
}
