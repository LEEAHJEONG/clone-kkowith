// 모바일 메뉴 반응형
window.addEventListener("load", function () {
  const header = document.querySelector(".header");
  const headerNav = document.querySelector(".header-nav");

  function moveScroll() {
    if (window.scrollY === 0) {
      header.classList.remove("scroll");
      headerNav.classList.remove("nav-scroll");
    } else {
      header.classList.add("scroll");
      headerNav.classList.add("nav-scroll");
    }
  }

  moveScroll();

  window.addEventListener("scroll", moveScroll);
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

// 메뉴 펼침

window.addEventListener("load", () => {
  const loginIcon = document.querySelector(".icon-login a");
  const headerOpen = document.querySelector(".header-open");
  const headerOpenMenu = document.querySelector(".header-open-menu");

  function toggleMenu() {
    headerOpen.classList.toggle("open");
  }

  loginIcon.addEventListener("click", (e) => {
    e.preventDefault();
    toggleMenu();
  });

  document.addEventListener("click", (e) => {
    if (!headerOpenMenu.contains(e.target) && !loginIcon.contains(e.target)) {
      headerOpen.classList.remove("open");
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      headerOpen.classList.remove("open");
    }
  });
});
