import { clearDiv } from "./view/controlView.js";

import {
  stationManagerButtonHandler,
  lineManagerButtonHandler,
  sectionManagerButtonHandler,
  mapManagerButtonHandler,
} from "./utils/handler.js";

export default function App() {
  const stationManagerBtn = document.querySelector("#station-manager-button");
  const lineManagerBtn = document.querySelector("#line-manager-button");
  const sectionManagerBtn = document.querySelector("#section-manager-button");
  const mapManagerBtn = document.querySelector("#map-print-manager-button");
  clearDiv();
  stationManagerBtn.addEventListener("click", stationManagerButtonHandler);
  lineManagerBtn.addEventListener("click", lineManagerButtonHandler);
  sectionManagerBtn.addEventListener("click", sectionManagerButtonHandler);
  mapManagerBtn.addEventListener("click", mapManagerButtonHandler);
}

App();
