ScrollReveal({
  reset: true,
  distance: '60px',
  duration: 2500,
  delay: 400
});

ScrollReveal().reveal('.title, .sub-title', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.sec1 .image, .desc', { delay: 600, origin: 'bottom' });
ScrollReveal().reveal('.text-box', { delay: 700, origin: 'right' });
ScrollReveal().reveal('.media-icons i', { delay: 500, origin: 'bottom', interval: 200 });
ScrollReveal().reveal('.sec2 .image, .sec3 .image', { delay: 500, origin: 'top' });
ScrollReveal().reveal('.media-desc li', { delay: 500, origin: 'left', interval: 200 });
