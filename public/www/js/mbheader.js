window.addEventListener("load", function () {
  const header = document.querySelector(".header");
  const inner = document.querySelector(".inner");
  const navList = document.querySelector(".nav-list");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", function () {
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
      // 스크롤 다운: header와 inner를 숨기고 nav-list만 보이게 함
      header.classList.add("hidden");
      inner.classList.add("hidden");
    } else {
      // 스크롤 업: header와 inner를 다시 보이게 함
      header.classList.remove("hidden");
      inner.classList.remove("hidden");
    }
    lastScrollY = window.scrollY;
  });
});
