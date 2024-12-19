


//make menu appear if scroll out of view odf container of menu 1//
document.addEventListener("DOMContentLoaded", function() {
  const stickyMenus = document.querySelectorAll(".sticky-menu");  // Select all sticky menu elements
  const topBackElements = document.querySelectorAll(".TopBack");  // Select all TopBack elements
  const topElement = document.getElementById("Top");  // Select the #Top element additionallly
  const footer = document.getElementById("Footer");  // Footer element

  // Loop through each sticky menu
  stickyMenus.forEach(function(stickyMenu) {
    window.addEventListener("scroll", function() {
      const topRect = topElement ? topElement.getBoundingClientRect() : { top: 0 }; // Safe check if topElement exists/
      const footerRect = footer.getBoundingClientRect();

      // Check if any TopBack element is visible in the viewport(also if invisible like in index)
      let isTopBackVisible = false;
      
      topBackElements.forEach(function(topBack) {
        const rect = topBack.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          isTopBackVisible = true;  // If any TopBack element is fully visible, set this to true
        }
      });

      // Check if the #Top element is visible in the viewport
      let isTopVisible = topRect.top >= 0 && topRect.bottom <= window.innerHeight;

      // If EITHER TopBack or Top element is visible, hide the sticky menu
      if (isTopBackVisible || isTopVisible) {
        stickyMenu.classList.add("hidden");
      } else if (topRect.top < 0 && !isTopBackVisible && !isTopVisible) {
        // Otherwise, show the sticky menu if the top element is out of view and neither TopBack nor Top are visible
        stickyMenu.classList.remove("hidden");
      }

      // Hide the sticky menu when it reaches the footer (at the bottom of the page)
      if (footerRect.top <= window.innerHeight) {
        stickyMenu.classList.add("hidden");
      } else if (!isTopBackVisible && !isTopVisible) {
        stickyMenu.classList.remove("hidden");  // Show the menu when not at the footer
      }
    });
  });
});




//Swiper is in the html file bc for some reason doesnt work in here


//(old)
//var swiper = new Swiper('.swiper-container', {
     // loop: true, // Infinite loop
      //spaceBetween: 10, // Space between slides
      //slidesPerView: 1, // One slide visible at a time
      //pagination: {
       // el: '.swiper-pagination',
       // clickable: true,
      //},
    //});



