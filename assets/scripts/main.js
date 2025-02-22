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
  modal.addEventListener('show.bs.modal', function() {
    var iframe = document.createElement('iframe');
    iframe.className = 'iframe-form';
    iframe.src = 'https://koalendar.com/e/appliance-repair-appointment-with-ek-global?embed=true';
    iframe.id = 'bookingIframe';
    modal.querySelector('.modal-body').appendChild(iframe);
  });
  modal.addEventListener('hidden.bs.modal', function() {
    var iframe = modal.querySelector('#bookingIframe');
    if (iframe) {
        iframe.remove();
    }
  });
});