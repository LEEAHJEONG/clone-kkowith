window.addEventListener("load", function () {
  const makeHtml = (_result) => {
    console.log(_result);
    let allTag = "";
    const leftlist = document.querySelector("#ltlist");
    _result.forEach((item) => {
      //금액에 세자리수 ',' 단위
      const money = parseInt(`${item.money}`, 10).toLocaleString();
      const tag = `<div class="main-lt-list" >
             <a class="main-lt-list-inner" href=${item.url}>
                <img src=${item.imgpath} alt="카카오 같이가치" />
                <div class="list-content">
                  <button type="button" name=${item.tag}>
                    <span class="hashtag">#</span>
                    <span>${item.tag}</span>
                  </button>
                  <strong>${item.title}</strong>
                  <span class="list-subtxt">${item.subtxt}</span>
                  <div class="progress-container">
                    <div class="progress-bar">
                      <div role="progressbar" class="current-bar" style="width: ${item.percent};"></div>
                    </div>
                    <div class="progress-info">
                      <span class="txt-num">${money}원</span>
                      <span class="txt-per">${item.percent}</span>
                    </div>
                  </div>
                </div>
              </a>
              </div>`;
      allTag = allTag + tag;
    });
    leftlist.innerHTML = allTag;
  };

  const dataUrl = "./apis/ltlist.json";
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
