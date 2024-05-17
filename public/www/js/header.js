// 모바일 메뉴 반응형
window.addEventListener("load", function () {
  const header = document.querySelector(".header");
  // const inner = document.querySelector(".inner");
  // const headerNav = document.querySelector(".header-nav");

  function handleScroll() {
    if (window.scrollY === 0) {
      header.classList.remove("scroll");
      // inner.classList.remove("inner-scroll");
      // headerNav.classList.remove("nav-scroll");
    } else {
      header.classList.add("scroll");
      // inner.classList.add("inner-scroll");
      // headerNav.classList.add("nav-scroll");
    }
  }

  handleScroll();

  window.addEventListener("scroll", handleScroll);
});

// 메뉴 클릭 시 언더바
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
