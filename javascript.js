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

