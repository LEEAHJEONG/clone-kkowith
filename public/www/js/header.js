window.addEventListener("load", function () {
  const header = document.querySelector(".header");
  const headerNav = document.querySelector(".header-nav");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", function () {
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
      // 스크롤 다운: 전체 헤더를 숨기고 네비게이션만 보이게 함
      header.classList.add("hidden");
      headerNav.style.display = "block";
    } else {
      // 스크롤 업: 전체 헤더를 보이게 함
      header.classList.remove("hidden");
      headerNav.style.display = "";
    }
    lastScrollY = window.scrollY;
  });
});
