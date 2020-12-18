import { LIMIT } from "./constants.js";

export const isValidateSation = (input, stations) => {
  const check = stations.findIndex((v) => v.name === input.trim());
  if (input.trim().length < LIMIT.STATION_LIMIT || check !== -1) {
    return false;
  }
  return true;
};
export const isValidateLine = (input, lines) => {
  const check = lines.findIndex((v) => v.name === input.trim());
  if (input.trim().length < LIMIT.LINE_LIMIT || check !== -1) {
    return false;
  }
  return true;
};
