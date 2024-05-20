window.addEventListener("load", function () {
  const makeHtml = (_result) => {
    console.log(_result);
    let allTag = "";
    const leftmost = document.querySelector("#ltmost");
    _result.forEach((item) => {
      //금액에 세자리수 ',' 단위
      const money = parseInt(`${item.money}`, 10).toLocaleString();
      // 달성률 85% 이상일시 종료임박라벨 나오게 하기
      let isEnd = "";
      if (parseInt(`${item.percent}`, 10) >= 85) {
        isEnd = "inline-flex";
      } else {
        isEnd = "none";
      }

      const tag = `<li class="card-item">
      <a href=${item.url}>
        <div class="card-image">
          <img src=${item.imgpath} alt="카카오 같이가치"/>
        </div>
        <div class="card-content">
          <strong>${item.title}</strong>
          <span class="card-subtxt">${item.subtxt}</span>
          <div class="progress-container">
            <div class="progress-bar">
              <div role="progressbar" class="current-bar" style="width: ${item.percent};"></div>
            </div>
            <div class="progress-info">
              <div>
                <span class="txt-num">${money}원</span>
              </div>
              <div>
                <span class="txt-per">${item.percent}</span>
              </div>
            </div>
          </div>
          <em type="rect" class="end-tag" style="display: ${isEnd};">종료임박</em>
        </div>
      </a>
    </li>`;
      allTag = allTag + tag;
    });
    leftmost.innerHTML = allTag;
  };

  const dataUrl = "./apis/ltmost.json";
  fetch(dataUrl)
    .then((response) => {
      const result = response.json();
      return result;
    })
    .then((result) => {
      makeHtml(result);
    })
    .catch((error) => {
      console.log(error);
    });
});
