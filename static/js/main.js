// Custom js

// Copyright year
document.addEventListener("DOMContentLoaded", function () {
  var yearSpan = document.getElementById("js-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear() + " ";
  }
});

// Soft scrolling
document.addEventListener("DOMContentLoaded", function() {
  const navbarHeight = document.querySelector('.navbar').offsetHeight;
  const links = document.querySelectorAll('a[href^="#"]');
  for (const link of links) {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const targetPosition = targetElement.offsetTop - navbarHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth"
        });
      }
    });
  }
});
