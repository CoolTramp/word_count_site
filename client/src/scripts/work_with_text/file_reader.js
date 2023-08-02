import { updateElementContent } from '../dom/dom_utils.js'
/**
 * Define is user's file text;
 * @param {Event} userFile is event.target.files[0]
 * @returns {Boolean} true if userFile is text 
 * and false another way
 */
export function isTextFile(userFile) {
    return userFile.type === 'text/plain';
};
/**
 * Read text file from input type="file" and
 * render the text on HTMLElement;
 * @param {Object} userFile - contains text's user object
 * @param {HTMLElement} element - a place in webpage
 * where will be to render the user text
 */
export function readFileAndDisplayContent(userFile, element) {
  if (!isTextFile(userFile)) {
      console.warn('Error: Not a text file');
      return null;
    };  
  const reader = new FileReader();
  let fileContent = '';  
  reader.onload = (event) => {
      fileContent = event.target.result;
      updateElementContent(element, fileContent);
  };
  reader.readAsText(userFile);
};

// "application/pdf"
// "application/vnd.oasis.opendocumen" odt
// "application/vnd.openxmlformats-officedocument.wordprocessingml.document" docx
// "application/msword" doc