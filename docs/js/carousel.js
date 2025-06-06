// Carousel functionality
document.addEventListener('DOMContentLoaded', function() {
  const carousels = document.querySelectorAll('.carousel-container');
  
  carousels.forEach(carousel => {
    const slides = carousel.querySelectorAll('.carousel-slide');
    const dots = carousel.querySelectorAll('.carousel-nav-dot');
    const prevBtn = carousel.querySelector('.carousel-arrow-prev');
    const nextBtn = carousel.querySelector('.carousel-arrow-next');
    
    let currentSlide = 0;
    let interval = null;
    const intervalTime = parseInt(carousel.getAttribute('data-interval') || 5000);
    
    // Initialize the first slide
    if (slides.length > 0) {
      slides[0].classList.add('active');
      if (dots.length > 0) {
        dots[0].classList.add('active');
      }
    }
    
    // Function to change slide
    function goToSlide(index) {
      // Remove active class from all slides
      slides.forEach(slide => {
        slide.classList.remove('active');
      });
      
      // Remove active class from all dots
      dots.forEach(dot => {
        dot.classList.remove('active');
      });
      
      // Add active class to current slide and dot
      currentSlide = (index + slides.length) % slides.length;
      slides[currentSlide].classList.add('active');
      if (dots.length > 0 && dots[currentSlide]) {
        dots[currentSlide].classList.add('active');
      }
    }
    
    // Auto-advance slides
    function startInterval() {
      if (interval) {
        clearInterval(interval);
      }
      
      interval = setInterval(() => {
        goToSlide(currentSlide + 1);
      }, intervalTime);
    }
    
    // Initialize auto-advance
    startInterval();
    
    // Event listeners for navigation dots
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        goToSlide(index);
        startInterval(); // Reset interval after manual navigation
      });
    });
    
    // Event listeners for arrow buttons
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        goToSlide(currentSlide - 1);
        startInterval(); // Reset interval after manual navigation
      });
    }
    
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        goToSlide(currentSlide + 1);
        startInterval(); // Reset interval after manual navigation
      });
    }
    
    // Pause auto-advance on hover (optional)
    carousel.addEventListener('mouseenter', () => {
      clearInterval(interval);
    });
    
    carousel.addEventListener('mouseleave', () => {
      startInterval();
    });
  });
});