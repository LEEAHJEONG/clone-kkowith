window.addEventListener("load", function () {
  const dataUrl = "./apis/rtcard.json";

  fetch(dataUrl)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      const cardsWhere = document.getElementById("card-list");
      let cardsTags = "";
      result.forEach((item) => {
        const tag = `
            <li>
              <a href="#" class="rt-card-list">
                <img src="${item.imgpath}" alt="카드이미지" />
                <div class="card-list-box">
                  <h3>${item.title}</h3>
                  <span>${item.txt}</span>
                </div>
              </a>
            </li>
          `;
        cardsTags += tag;
      });
      cardsWhere.innerHTML = cardsTags;
    })
    .catch((error) => {
      console.log(error);
    });
});
