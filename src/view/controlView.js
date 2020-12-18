import { TAGS } from "../utils/constants.js";
export const clearDiv = () => {
  const appchild = document.querySelector("#app").children;
  for (let i = TAGS.CONTANER_STATION; i < appchild.length; i++) {
    appchild[i].style.display = "none";
  }
};

export const visibleStationMenu = () => {
  const staionDiv = document.querySelector("#station-container");
  staionDiv.innerHTML = "";
  staionDiv.innerHTML += `<p>역 이름</p>
  <input id="#station-name-input" placeholder="역을 입력해주세요"/> <button id="station-add-button">역 추가</button>
  <h2>지하철 역 목록</h2>
  `;
};

export const visibleLineMenu = () => {
  const lineDiv = document.querySelector("#line-container");
  lineDiv.innerHTML = "";
  lineDiv.innerHTML += `<p>노선 이름</p>
    <input id="#line-name-input" placeholder="노선 이름을 입력해주세요"/><br><br>
    <label>상행 종점 <select id="line-start-station-selector"></select></label><br>
    <label>하행 종점</label>  <select id="line-end-station-selector"></select><br><br>
    <button id="line-add-button">노선 추가</button>
    <h2>지하철 노선 목록</h2>
    `;
};

export const visibleSectionMenu = () => {
  const sectionDiv = document.querySelector("#section-container");
  sectionDiv.innerHTML = "";
  sectionDiv.innerHTML += `
    <h3>구간을 수정할 노선을 선택해주세요</h3>
    `;
};

export const visibleMapMenu = () => {
  const mapDiv = document.querySelector("#map-container");
  mapDiv.innerHTML = "";
  mapDiv.innerHTML += `
    <h3>map</h3>
    `;
};

export const clearMenuDiv = (divNum) => {
  const appchild = document.querySelector("#app").children;
  console.log(appchild);
  console.log(divNum);
  for (let i = TAGS.CONTANER_STATION; i < appchild.length; i++) {
    if (i !== divNum) {
      appchild[i].style.display = "none";
    } else {
      appchild[i].style.display === ""
        ? (appchild[i].style.display = "none")
        : (appchild[i].style.display = "");
    }
  }
};
