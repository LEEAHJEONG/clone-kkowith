window.addEventListener("load", function () {
  const navLinks = document.querySelectorAll(".header-nav .nav-list li a");

  function addUnderline() {
    navLinks.forEach(function (link) {
      link.classList.remove("underline");
    });
    navLinks[0].classList.add("underline");
  }

  addUnderline();

  function handleNavClick(event) {
    navLinks.forEach(function (link) {
      link.classList.remove("underline");
    });
    event.target.classList.add("underline");
  }

  navLinks.forEach(function (link) {
    link.addEventListener("click", handleNavClick);
  });
});
