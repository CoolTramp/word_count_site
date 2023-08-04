import { quill } from "../work_with_text/quill.js";
import { progressBar } from "../constants.js";
import { getLoadingProcent } from "../work_with_text/utils.js";

export function updateElementContent(fileContent) {
  cleanTextArea();
  quill.insertText(0, fileContent);
}

export function cleanTextArea() {
  quill.deleteText(0, quill.getLength());
}

export function showProgressBar() {
  progressBar.classList.add("show-progress-bar");
}

export function hideProgressBar() {
  progressBar.classList.remove("show-progress-bar");
}

export function changeValueProgressBar(pageNumber, countAllPage) {
  progressBar.innerText = getLoadingProcent(pageNumber, countAllPage) + "%";
}
