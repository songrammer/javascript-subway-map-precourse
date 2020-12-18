import { createStaionList, createLineList } from "../view/controlView.js";
import { deleteButtonHandler } from "./station.js";
export const getSelect = (name) => {
  const select = document.querySelector(name);
  return select.options[select.selectedIndex]?.dataset["name"];
};

export const decideTable = (containerName, data) => {
  if (containerName === "#station-container") {
    return createStaionList(data);
  } else if (containerName === "#line-container") {
    return createLineList(data);
  } else if (containerName === "#section-container") {
    console.log("now");
  }
};

export const createButtonHandler = () => {
  Array.prototype.forEach.call(
    document.querySelectorAll(".station-delete-button"),
    function (btn) {
      btn.addEventListener("click", deleteButtonHandler);
    }
  );
};
