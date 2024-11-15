const cloneEl = document.querySelector(".logos-slide").cloneNode(true);
const logos = document.querySelector('.logos').appendChild(cloneEl);
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});
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