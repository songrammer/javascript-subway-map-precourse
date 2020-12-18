import { TAGS, ERR_MESSAGE } from "./constants.js";
import { getSelect } from "./common.js";
import {
  visibleSectionMenu,
  clearMenuDiv,
  printLineButton,
  printSectionManager,
  printTable,
} from "../view/controlView.js";

import { getLineData, setLineData } from "./data.js";
import { isValidateOrder } from "./vlidate.js";

export class Section {
  constructor() {
    this.lines;
    clearMenuDiv(TAGS.CONTANER_SECTION);
    visibleSectionMenu();
    this.render();
  }
  render = () => {
    this.lines = getLineData();
    printLineButton(this.lines);
    createLineButtonHandler();
  };
}

export const createLineButtonHandler = () => {
  Array.prototype.forEach.call(
    document.querySelectorAll(".section-line-menu-button"),
    function (btn) {
      btn.addEventListener("click", lineButtonHandler);
    }
  );
};

export const lineButtonHandler = (e) => {
  console.log("pass");
  const lines = getLineData();
  const line = lines.find((v) => v.name === e.target.dataset.name);
  console.log(e.target);
  printSectionManager(line);
};

export const createLineAddButtonHandler = (name) => {
  const sectionOrder = document.querySelector("#section-order-input");
  const sectionAddButton = document.querySelector("#section-add-button");
  const lines = getLineData();
  const line = lines.find((v) => v.name === name);
  sectionAddButton.addEventListener("click", () => {
    if (!isValidateOrder(line, sectionOrder.value)) {
      alert(ERR_MESSAGE.SECTION_INPUT_ERR);
      return;
    }
    const sectionName = getSelect("#section-station-selector");
    addSection(sectionName, line, sectionOrder.value);
    setLineData(lines);
    printTable(line, "#section-container");
  });
};

export const addSection = (name, line, sectionNum) => {
  line.stations.splice(sectionNum, 0, name);
};

export const deleteSectionButtonHandler = () => {};
