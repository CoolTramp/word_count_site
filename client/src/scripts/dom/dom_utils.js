import { textAreaUserText } from '../constants.js'

function renderText(element, fileContent) {
    element.innerText = fileContent;
};

function changeValue(element, fileContent) {
    element.value = fileContent;
};

export function updateElementContent(element, fileContent) {
    renderText(element, fileContent);
    changeValue(element, fileContent);
};

export function cleanTextArea() {
    textAreaUserText.value = '';
}