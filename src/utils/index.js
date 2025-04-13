import initialData from "../assets/data/initialData.json"
/**
 * Initializes the selectedItems object in localStorage
 * @returns {void}
 */
export const initiateSelectedItems = () => {
  localStorage.setItem("selectedItems", JSON.stringify([initialData]));
  localStorage.setItem("activeID", JSON.stringify(initialData.historyID));
};

/**
 * Sets the background object in localStorage
 * @param { string | "background" | "filter" | "sticker" } key key for the slectedItems object
 * @param {{image: string, color: string}} value value for the selectedItems object
 * @returns {void}
 */
export const setItemsToLS = (key, value) => {
  const selectedItems = JSON.parse(localStorage.getItem("selectedItems")) || {};
  selectedItems[key] = value;
  localStorage.setItem("selectedItems", JSON.stringify(selectedItems));
};

/**
 * get activeID and selectedItems from localStorage
 * @returns {{ activeID: number, selectedItems: object }}
 */
export const getIDandItems = () => {
  const activeID = JSON.parse(localStorage.getItem("activeID")) || 0;
  const selectedItems = JSON.parse(localStorage.getItem("selectedItems")) || [];
  return { activeID, selectedItems };
};

export const getLayerByChangedID = (selectedItems, changedID) => {
  const findIndex = selectedItems.findIndex(
    (item) => item.historyID === changedID
  );
  const newActiveID = selectedItems[findIndex].historyID;
  localStorage.setItem("activeID", JSON.stringify(newActiveID));
  return selectedItems[findIndex];
}

export const getLSRatio = () => {
  return JSON.parse(localStorage.getItem("selectedRatio"));

}
