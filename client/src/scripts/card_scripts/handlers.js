import { HORIZONTAL_CARDS_ID, VERTICAL_CARDS_ID } from './constants.js'
import * as DOMFunctions from './dom_functions.js'
import { getData } from './data.js'
import { isEmptyObject } from './utils.js'

document.getElementById(HORIZONTAL_CARDS_ID).addEventListener('click', handleCardClick);
document.getElementById(VERTICAL_CARDS_ID).addEventListener('click', handleCardClick);

  function handleCardClick(event) {
    const TARGET_CARD = event.target;
    const LI_TAG_NAME = 'LI';

    if (TARGET_CARD.tagName !== LI_TAG_NAME) return null;
    if (isEmptyObject(getData())) throw new Error('data is not defined');

    const handlers = {
      [HORIZONTAL_CARDS_ID]: chooseHorizontalCard,
      [VERTICAL_CARDS_ID]: chooseVerticalCard,
    };

    const PARENT_ELEMENT_ID = TARGET_CARD.parentElement.id;
    const handler = handlers[PARENT_ELEMENT_ID];
    
    if (handler) {
      handler(TARGET_CARD);
    };
  };
    
  function chooseVerticalCard(li) {
    DOMFunctions.changeStylesForChosenCard(li);
    DOMFunctions.renderVerticalCardInformation(li);
  };

  function chooseHorizontalCard(li) {
    DOMFunctions.changeStylesForChosenCard(li);
    DOMFunctions.renderHorizontalCardInformation(+li.innerHTML);
  };


