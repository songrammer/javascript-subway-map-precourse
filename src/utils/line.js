import { TAGS, ERR_MESSAGE } from "./constants.js";
import { isValidateLine } from "./vlidate.js";
import {
  visibleLineMenu,
  clearMenuDiv,
  printTable,
  pushSelect,
} from "../view/controlView.js";

import {
  getLineData,
  getStationData,
  setLineData,
  setStationData,
} from "./data.js";
import { getSelect } from "./common.js";

export class Line {
  constructor() {
    this.lines = getLineData();
    clearMenuDiv(TAGS.CONTANER_LINE);
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
    printTable(this.lines, "#line-container");
  };

  addLine = (name, startStation, endStation) => {
    this.lines.push({ name: name, stations: [startStation, endStation] });
    this.addLineToStaion(name, endStation);
    this.addLineToStaion(name, startStation);
    setLineData(this.lines);
  };

  addLineToStaion = (name, startStation) => {
    let stations = getStationData();
    const startIndex = stations.findIndex((v) => v.name == startStation);
    if (!stations[startIndex].lines) {
      stations[startIndex].lines = [];
    }
    stations[startIndex].lines.push(name);
    setStationData(stations);
    console.log(stations);
  };
}

export const deleteLineButtonHandler = (e) => {
  const deleteName = e.target.dataset.name;
  const lines = getLineData();
  const deletedLine = lines.filter((v) => v.name !== deleteName);
  setLineData(deletedLine);
  deleteLineFromStation(deleteName);
  printTable(deletedLine, "#line-container");
};

export const deleteLineFromStation = (lineName) => {
  let stations = getStationData();
  stations.forEach((v) => {
    if (v.lines) {
      const deleteResult = v.lines.filter((line) => line !== lineName);
      v.lines = deleteResult;
    }
  });
  setStationData(stations);
  console.log(stations);
};
