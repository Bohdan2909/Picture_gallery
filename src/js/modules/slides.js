const slides = (slide, direction, prev, next) => { 
  let slideIndex = 1;
  const items = document.querySelector(slide);
  const prevBtn = document.querySelector(prev);
  const nextBtn = document.querySelector(next);

  function showSlides (n) {
    if (n < items.length) {
      slideIndex = 1;
    }
  }
 };


 export default slides;