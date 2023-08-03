import * as constants from './constants.js'
import { renderUserTextInTextArea } from './dom/dom_functions.js'
import { getCountedWord } from './api.js'
import { showCard, setInfoCardAsDefault } from './card_scripts/dom_functions.js'
import { cleanTextArea } from './dom/dom_utils.js'

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
    cleanTextArea()
})


function hasValueTextArea() {
    return Boolean(constants.textAreaUserText.value.trim());
};

function getValueTextArea() {
    return constants.textAreaUserText.value;
};

