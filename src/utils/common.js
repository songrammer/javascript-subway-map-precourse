import { createStaionList, createLineList } from "../view/controlView.js";
import { deleteStationButtonHandler } from "./station.js";
import { deleteLineButtonHandler } from "./line.js";

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

export const decideDeleteButton = (containerName) => {
  if (containerName === "#station-container") {
    return [deleteStationButtonHandler, ".station-delete-button"];
  } else if (containerName === "#line-container") {
    return [deleteLineButtonHandler, ".line-delete-button"];
  } else if (containerName === "#section-container") {
    console.log("now");
  }
};

export const createButtonHandler = (containerName) => {
  const deleteButton = decideDeleteButton(containerName);
  Array.prototype.forEach.call(
    document.querySelectorAll(deleteButton[1]),
    function (btn) {
      btn.addEventListener("click", deleteButton[0]);
    }
  );
};
