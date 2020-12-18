import { TAGS, ERR_MESSAGE } from "./constants.js";
import { getStationData, setStationData } from "./data.js";
import {
  visibleStationMenu,
  clearMenuDiv,
  printTable,
} from "../view/controlView.js";
import { isValidateSation } from "./vlidate.js";

export class Station {
  constructor() {
    this.stations = getStationData();
    clearMenuDiv(TAGS.CONTANER_STATION);
    visibleStationMenu();
    this.stationAddBtn = document.querySelector("#station-add-button");
    this.stationInput = document.getElementById("station-name-input");
    printTable(this.stations, "#station-container");
    this.render();
  }

  render = () => {
    this.stationAddBtn.addEventListener("click", this.stationAddBtnHandler);
  };

  stationAddBtnHandler = () => {
    this.stations = getStationData();
    console.log(this.stations);
    if (!isValidateSation(this.stationInput.value, this.stations)) {
      alert(ERR_MESSAGE.STATION_INPUT_ERR);
      return;
    }
    this.stations.push({ name: this.stationInput.value });
    setStationData(this.stations);
    printTable(this.stations, "#station-container");
  };
}

export const deleteButtonHandler = (e) => {
  const stationName = e.target.dataset.name;
  const stations = getStationData();
  const deleteStation = stations.filter((v) => v.name !== stationName);
  setStationData(deleteStation);
  printTable(deleteStation, "#station-container");
};
