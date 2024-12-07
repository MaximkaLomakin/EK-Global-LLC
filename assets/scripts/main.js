document.addEventListener("DOMContentLoaded", function() {
Tu.tScroll({
  't-element': '.t-animated, .fadeDown, .bounceOut, .fadeIn, .bounceIn, .zoomOut', 
  't-duration': 0.9
});

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
window.scrollBy(0, -2);
setTimeout(() => { 
  window.scrollBy(0, 2); },
50);

var modal = document.getElementById('bookingModal');
  modal.addEventListener('shown.bs.modal', function() {
      var iframe = modal.querySelector('iframe');
      if (iframe) {
          iframe.setAttribute('src', 'https://koalendar.com/e/appliance-repair-appointment-with-ek-global?embed=true');
      }
  });
  modal.addEventListener('hide.bs.modal', function() {
      var iframe = modal.querySelector('iframe');
      if (iframe) {
          iframe.setAttribute('src', '');
      }
  });
});