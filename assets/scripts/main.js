document.addEventListener("DOMContentLoaded", function() {
Tu.tScroll({
  't-element': '.t-animated',
  't-duration': 0.9
});

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
});