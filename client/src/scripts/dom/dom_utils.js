import { quill } from '../work_with_text/quill.js';

export function updateElementContent(fileContent) {
    cleanTextArea();
    quill.insertText(0, fileContent);
};

export function cleanTextArea() {
    quill.deleteText(0, quill.getLength());
};