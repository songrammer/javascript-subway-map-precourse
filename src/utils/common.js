export const getSelect = (name) => {
  const select = document.querySelector(name);
  return select.options[select.selectedIndex]?.dataset["name"];
};
