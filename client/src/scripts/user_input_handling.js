import * as constants from './constants.js'
import { renderUserTextInTextArea } from './dom/dom_functions.js'
import { getCountedWord } from './api.js'
import { showCard, setInfoCardAsDefault } from './card_scripts/dom_functions.js'

constants.inputChooseFile.addEventListener('change', event => {
    const userFile = event.target.files[0];
    renderUserTextInTextArea(userFile);
});

constants.bntStartCountWord.addEventListener('click', () => {
    if (hasValueTextArea) 
        getCountedWord(getValueTextArea());
    setInfoCardAsDefault();
    showCard();
});

function hasValueTextArea() {
    return Boolean(constants.textAreaUserText.value.trim());
};

function getValueTextArea() {
    return constants.textAreaUserText.value;
};