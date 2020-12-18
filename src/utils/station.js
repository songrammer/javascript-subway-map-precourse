import { TAGS } from "./constants.js";
import { visibleStationMenu, clearMenuDiv } from "../view/controlView.js";
export class Station {
  constructor() {
    this.state = [];
    clearMenuDiv(TAGS.CONTANER_STATION);
    visibleStationMenu();
  }
}
