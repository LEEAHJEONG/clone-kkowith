window.addEventListener("load", function () {
  const dataUrl = "./apis/ltslide.json";
  fetch(dataUrl)
    .then((response) => {
      const data = response.json();
      return data;
    })
    .then((result) => {
      let slideTags = "";

      for (let i = 0; i < result.length; i++) {
        const data = result[i];
        const test = `
        <div class="swiper-slide">
          <a class="main-lt-list-inner" href=${data.url}>
                <img src=${data.imgpath} alt="카카오 같이가치" />
                <div class="list-content">
                  <button type="button" name=${data.tag}>
                    <span class="hashtag">#</span>
                    <span>${data.tag}</span>
                  </button>
                  <strong>${data.title}</strong>
                  <span class="list-subtxt">
                  ${data.subtxt}
                  </span>
                  <em type="rect">
                    <svg xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 28 28"
                      width="14"
                      height="14"
                      opacity="1"
                      class="sc-62ee9b1b-0 gsIhNz">
                      <g fill="none" fill-rule="evenodd">
                        <path 
                        d="m15.414.566 2.934 2.933L22.5 3.5a2 2 0 0 1 2 2v4.15l2.934 2.936a2 2 0 0 1 0 2.828L24.5 18.35 24.5 22.5a2 2 0 0 1-2 2h-4.15l-2.936 2.934a2 2 0 0 1-2.828 0L9.65 24.5 5.5 24.5a2 2 0 0 1-2-2v-4.152L.565 15.414a2 2 0 0 1 0-2.828L3.499 9.65 3.5 5.5a2 2 0 0 1 2-2h4.151L12.586.565a2 2 0 0 1 2.828 0z"
                          fill="#ad4cfe">
                          </path>
                        <path
                          d="M18.02 9.62a1 1 0 0 1 1.677 1.082l-.068.106-6.066 8.21a1 1 0 0 1-1.443.175l-.09-.085-3.506-3.73a1 1 0 0 1 1.366-1.456l.091.086 2.685 2.857 5.354-7.246z"
                          fill="#fff"
                          fill-rule="nonzero">
                          </path>
                      </g>
                    </svg>
                    ${data.num}명 행동중
                  </em>
                </div>
              </a>
            </div>
          `;
        slideTags += test;
      }

      const whereTag = document.querySelector(".leftslide .swiper-wrapper");
      whereTag.innerHTML = slideTags;

      // eslint-disable-next-line no-undef
      const leftSlide = new Swiper(".leftslide", {
        loop: true,
        speed: 800,
        autoplay: {
          delay: 1500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: "fraction",
          formatFractionCurrent: function (number) {
            return number;
          },
        },
      });

      const slideArea = document.querySelector(".leftslide");

      slideArea.addEventListener("mouseenter", function () {
        leftSlide.autoplay.stop();
      });
      slideArea.addEventListener("mouseleave", function () {
        leftSlide.autoplay.start();
      });
    })
    .catch((error) => {
      console.log(error);
    });
});
