import { creatTextForCard } from '../card_scripts/utils.js';
import { txtFormat } from './file_reader.js'
import { pdfFormat } from './read_pdf.js';

// "application/pdf"
// "application/vnd.oasis.opendocumen" odt
// "application/vnd.openxmlformats-officedocument.wordprocessingml.document" docx
// "application/msword" doc 

function defineFormat(userFileType) {
  const FORMATS = {
    'text/plain': 'txt',
    'application/pdf': 'pdf'
  };
  return Boolean(FORMATS[userFileType])? FORMATS[userFileType]: null;
};
/**
 * Read text file from input type="file" and
 * render the text on HTMLElement;
 * @param {Object} userFile - contains text's user object
 * @param {HTMLElement} element - a place in webpage
 * where will be to render the user text
 */
export function readFileAndDisplayContent(userFile) {
  const userTextFormat = defineFormat(userFile.type);
  if (!userTextFormat)  {
    console.warn('format is not defined');
    return null;
  };
  
  const formatReaders = {
    'txt' : txtFormat,
    'pdf' : pdfFormat
  }

  formatReaders[userTextFormat](userFile);
};
