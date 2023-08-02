import * as constants from './constants.js'
import { renderUserTextInTextArea } from './dom/dom_functions.js'
import { getCountedWord } from './api.js'


constants.inputChooseFile.addEventListener('change', event => {
    const userFile = event.target.files[0];
    renderUserTextInTextArea(userFile);
});

constants.bntStartCountWord.addEventListener('click', () => {
    if (hasValueTextArea) 
        getCountedWord(getValueTextArea()); 
});

function hasValueTextArea() {
    return Boolean(constants.textAreaUserText.value.trim());
};

function getValueTextArea() {
    return constants.textAreaUserText.value;
};