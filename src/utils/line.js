import { TAGS, ERR_MESSAGE } from "./constants.js";
import { isValidateLine } from "./vlidate.js";
import {
  visibleLineMenu,
  clearMenuDiv,
  printTable,
  pushSelect,
} from "../view/controlView.js";

import { getLineData, setLineData } from "./data.js";
import { getSelect } from "./common.js";
export class Line {
  constructor() {
    this.lines = getLineData();
    clearMenuDiv(3);
    visibleLineMenu();
    printTable(this.lines, "#line-container");
    this.lineAddBtn = document.querySelector("#line-add-button");
    this.lineInput = document.querySelector("#line-name-input");
    this.render();
  }

  render = () => {
    this.lineAddBtn.addEventListener("click", this.lineAddBtnHandler);
    pushSelect("#line-start-station-selector");
    pushSelect("#line-end-station-selector");
  };

  lineAddBtnHandler = () => {
    this.lines = getLineData();
    const startStation = getSelect("#line-start-station-selector");
    const endStation = getSelect("#line-end-station-selector");
    if (
      !isValidateLine(this.lineInput.value, this.lines) ||
      startStation === endStation
    ) {
      alert(ERR_MESSAGE.LINE_INPUT_ERR);
      return;
    }
    this.addLine(this.lineInput.value, startStation, endStation);
  };

  addLine = (name, startStation, endStation) => {
    this.lines.push({ name: name, stations: [startStation, endStation] });
    setLineData(this.lines);
    // console.log(this.lines);
  };
}
