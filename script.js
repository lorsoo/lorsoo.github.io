


//make menu appear if scroll out of view odf container of menu 1//

document.addEventListener("DOMContentLoaded", function() {
  const triggerElement = document.getElementById("trigger-element");
  const stickyMenu = document.getElementById("sticky-menu");

  window.addEventListener("scroll", function() {
    const triggerRect = triggerElement.getBoundingClientRect();
    
    // Check if the element is out of view (above the viewport)
    if (triggerRect.top < 0) {
      stickyMenu.classList.remove("hidden"); // Show the menu
    } else {
      stickyMenu.classList.add("hidden"); // Hide the menu
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const triggerElement = document.getElementById("trigger-element");
  const stickyMenu = document.getElementById("ScrollMenu");

  // Initially hide the sticky menu
  stickyMenu.classList.add("hidden");

  window.addEventListener("scroll", function() {
    const triggerRect = triggerElement.getBoundingClientRect();
    
    // Check if the element is out of view (above the viewport)
    if (triggerRect.top < 0) {
      stickyMenu.classList.remove("hidden"); // Show the menu
    } else {
      stickyMenu.classList.add("hidden"); // Hide the menu
    }
  });
});

var swiper = new Swiper('.swiper-container', {
      loop: true, // Infinite loop
      spaceBetween: 10, // Space between slides
      slidesPerView: 1, // One slide visible at a time
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });