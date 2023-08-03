import { updateElementContent } from '../dom/dom_utils.js'

export function txtFormat(userFile, element) {
  const reader = new FileReader();
  let fileContent = '';  
  reader.onload = (event) => {
      fileContent = event.target.result;
      updateElementContent(element, fileContent);
  };
  reader.readAsText(userFile);
}




