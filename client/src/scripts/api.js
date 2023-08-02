import { URL_CONTRACTION } from './constants.js'
import { setData } from './card_scripts/data.js'
import { createHorizontalCards } from './card_scripts/dom_functions.js'

export async function getCountedWord(textAreaValue) {
    try {
        const response = await fetch(URL_CONTRACTION, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({text: textAreaValue})
        });

        if (!response.ok) {
            throw new Error('server is not defined', + response.status + ' ' + response.statusText);
        };
        //answer.data contains object with counted words
        const answer = await response.json();
        setData(answer.data);
        createHorizontalCards();

        return answer;
    } catch(err) {
        console.error(err);
    };
};

