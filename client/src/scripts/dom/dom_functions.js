import { readFileAndDisplayContent } from "../work_with_text/format_detector.js";

/**
 * Pass the user file for defining file's format
 * and render the contains to to quill text reader.
 * @param {Object} userFile - the object
 * from input type="file"
 */
export function renderUserTextInTextArea(userFile) {
  readFileAndDisplayContent(userFile);
}
