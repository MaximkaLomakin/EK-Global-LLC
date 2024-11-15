document.addEventListener("DOMContentLoaded", function() {
  const cloneEl = document.querySelector(".logos-slide").cloneNode(true);
const logos = document.querySelector('.logos').appendChild(cloneEl);
var slider = tns({
  "container": "#reviewSlider",
  "center": true,
  "controls": true,
  "nav": false,
  responsive: {
    300: {
      edgePadding: 20,
      gutter: 20,
      items: 1,
    },
    700: {
      gutter: 30,
      items: 1,
    },
    1200: {
      items: 3,
      gutter: 50,
    }
  },
  "autoplay": true,
  //"autoplayHoverPause": true,
  "autoplayButtonOutput": false,
  "autoplayTimeout": 20000,
  "loop": true,
  "swipeAngle": false,  
  "mouseDrag": true,
  "speed": 800,
  "prevButton": '#slider1_prev', 
  "nextButton": '#slider1_next'
});
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
Tu.tScroll({
  't-element': '.t-animated',
  't-duration': 0.9
});
});