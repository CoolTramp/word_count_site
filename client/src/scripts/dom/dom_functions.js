import { readFileAndDisplayContent } from '../work_with_text/file_reader.js'
import * as constants from '../constants.js'

export function renderUserTextInTextArea(userFile) {
    readFileAndDisplayContent(userFile, constants.textAreaUserText);
};


