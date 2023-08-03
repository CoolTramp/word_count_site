import { readFileAndDisplayContent } from '../work_with_text/format_detector.js'
import * as constants from '../constants.js'

export function renderUserTextInTextArea(userFile) {
    readFileAndDisplayContent(userFile, constants.textAreaUserText);
};


