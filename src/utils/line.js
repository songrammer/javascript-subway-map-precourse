import { TAGS } from "./constants.js";
import { visibleLineMenu, clearMenuDiv } from "../view/controlView.js";
export class Line {
  constructor() {
    this.state = [];
    clearMenuDiv(3);
    visibleLineMenu();
  }
}
