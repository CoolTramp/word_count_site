import {
  updateElementContent,
  showProgressBar,
  hideProgressBar,
  changeValueProgressBar,
} from "../dom/dom_utils.js";

export function txtFormat(userFile) {
  const reader = new FileReader();
  let fileContent = "";
  reader.onload = (event) => {
    fileContent = event.target.result;
    updateElementContent(fileContent);
  };
  reader.readAsText(userFile);
}
