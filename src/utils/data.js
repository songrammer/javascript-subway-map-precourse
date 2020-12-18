import { DATA } from "./constants.js";
export const getStationData = () => {
  const dataFromLocalStorage = localStorage.getItem(DATA.STATION);
  if (dataFromLocalStorage === null) {
    return [];
  }

  return JSON.parse(dataFromLocalStorage);
};

export const setStationData = (stations) => {
  localStorage.setItem(DATA.STATION, JSON.stringify(stations));
};
