let currentIndex = 0;

    const slides = document.querySelectorAll('.slide');

    function showSlide(index) {
      // Hide all slides
      slides.forEach((slide, i) => {
        slide.classList.remove('active');
      });
      // Show the current slide
      slides[index].classList.add('active');
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    }