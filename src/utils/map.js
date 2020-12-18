import { TAGS } from "./constants.js";
import { visibleMapMenu, clearMenuDiv } from "../view/controlView.js";
export class Map {
  constructor() {
    this.state = [];
    clearMenuDiv(5);
    visibleMapMenu();
  }
}
