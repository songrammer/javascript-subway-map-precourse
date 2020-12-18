import { Station, deleteButtonHandler } from "./station.js";
import { Line } from "./line.js";
import { Section } from "./section.js";
import { Map } from "./map.js";

export const stationManagerButtonHandler = () => {
  console.log("clickstationManager");
  new Station();
};
export const lineManagerButtonHandler = () => {
  console.log("lineManagerButtonHandler");
  new Line();
};
export const sectionManagerButtonHandler = () => {
  console.log("sectionManagerBtn");
  new Section();
};
export const mapManagerButtonHandler = () => {
  console.log("mapManagerBtn");
  new Map();
};
