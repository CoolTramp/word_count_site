import * as constants from './constants.js'
import { renderUserTextInTextArea } from './dom/dom_functions.js'
import { getCountedWord } from './api.js'
import { showCard, setInfoCardAsDefault } from './card_scripts/dom_functions.js'
import { cleanTextArea } from './dom/dom_utils.js'
import { quill } from './work_with_text/quill.js'

constants.inputChooseFile.addEventListener('change', event => {
    const userFile = event.target.files[0];
    renderUserTextInTextArea(userFile);
});

constants.bntStartCountWord.addEventListener('click', () => {
    if (hasValueTextArea()) {
        getCountedWord(getValueTextArea());
        setInfoCardAsDefault();
        showCard();
    }
});

constants.trash.addEventListener('click', () => {
    cleanTextArea();
    clearInput();
})


function hasValueTextArea() {
    return Boolean(quill.getLength() > 0);
};

function getValueTextArea() {
    return quill.getContents().ops[0].insert;
};

function clearInput() {
    constants.inputChooseFile.value = '';
  }