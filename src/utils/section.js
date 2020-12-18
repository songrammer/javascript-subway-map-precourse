import { TAGS } from "./constants.js";
import { visibleSectionMenu, clearMenuDiv } from "../view/controlView.js";
export class Section {
  constructor() {
    this.state = [];
    clearMenuDiv(4);
    visibleSectionMenu();
  }
}
