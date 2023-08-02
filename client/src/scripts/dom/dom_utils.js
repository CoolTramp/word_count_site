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