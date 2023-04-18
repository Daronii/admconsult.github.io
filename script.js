$(document).ready(function() {
  // When the document is ready
  $("#services").css("opacity", "0"); // Set the opacity of the element to 0
  $("#services").animate({ opacity: 1 }, 1000); // Animate the opacity to 1 over 1 second (1000 milliseconds)
});

// Add this JavaScript to your existing code or a new script file
document.addEventListener("DOMContentLoaded", function() {
  var servicesSection = document.getElementById("services");
  var servicesSectionOffsetTop = servicesSection.offsetTop;

  function checkScroll() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop + window.innerHeight > servicesSectionOffsetTop) {
      servicesSection.classList.add("fade-in");
    }
  }

  window.addEventListener("scroll", checkScroll);
});




