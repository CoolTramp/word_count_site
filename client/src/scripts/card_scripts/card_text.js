import { getData } from './data.js'
import { isEmptyObject } from './utils.js'

export const INFO_CARD = 
  `<span>
      Hello!! <br>
      The numbers above represent <br>
      the word's length in the found text. <br>
      Click on this to see all words <br>
      with that defined length. <br>
  </span>`;

  export function getCommonCardText() {
    const DATA = getData();
    if (isEmptyObject(DATA)) throw new Error('data is not defined');

    let str = `<table style="text-align: center;"> 
                <tr>
                  <td>word's length:</td>
                  <td>word's number:</td>
                </tr>`;
                
    Object.entries(DATA['meta']).forEach(meta => {
      const WORD_LENGTH = meta[0];
      const WORD_NUMBER = meta[1];

      str += `<tr>
                <td>${WORD_LENGTH}</td>
                <td>${WORD_NUMBER}</td>
              </tr>`;
    });

    str += `</table>`;
    
    return str;
  };
