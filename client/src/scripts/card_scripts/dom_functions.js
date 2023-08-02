import { getData } from './data.js'
import { HORIZONTAL_CARDS_ID } from './constants.js'
import { CARD_COLORS } from './colors.js'
import * as utils from './utils.js'
import * as text from './card_text.js'

  export function createHorizontalCards() {
    const DATA = getData();
    if (utils.isEmptyObject(DATA)) throw new Error('data is not defined');

    deleteHorozontalCards(); 

    Object.keys(DATA["count"]).forEach(cardName => {
      let newLi = document.createElement('li');
      newLi.innerHTML = cardName;
      newLi.style.backgroundColor = CARD_COLORS[parseInt(cardName, 10)];
      document.getElementById(HORIZONTAL_CARDS_ID).appendChild(newLi);
    });
  };

  function deleteHorozontalCards() {
    document.querySelectorAll('#horizontal-cards li')
      .forEach(element => {
        element.remove();
    });
  };

  export function changeStylesForChosenCard(li) {
    removeActiveCardClasses();
    changeColorOfChosenCard(li);
    li.classList.add('active-card');
  };

  function removeActiveCardClasses() {
    const containers = ['#vertical-cards', '#horizontal-cards'];
  
    containers.forEach(containerId => {
      document.querySelectorAll(`${containerId} li`).forEach(li => {
        li.style.borderRightColor = "black";
        li.style.borderBottomColor = "black";
        li.classList.remove('active-card');
      });
    });
  };

  function changeColorOfChosenCard(li) {
    const COLOR = li.style.backgroundColor;
    const LI_ID = li.id;
    const LI_STYLE = li.style;

    if (!card) throw console.warn('absent HTMLElement card');
    const CARD_STYLE = card.style;
    CARD_STYLE.backgroundColor = COLOR;

    LI_STYLE.borderRightColor = LI_ID ? COLOR : '';
    LI_STYLE.borderBottomColor = LI_ID ? '': COLOR;
  };

   /**
  * @param {String} number - the card number which
  * belongs the card with all words whose 
  * length is equal to the card number.
  */
  export function renderHorizontalCardInformation(number) {
    utils.cleanCard();
    for (let [word, count] of utils.sortWords(number)) {
      let span = document.createElement('span');
      span.innerHTML = utils.creatTextForCard(word, count);
      card.appendChild(span);
    };
  };

  export function renderVerticalCardInformation(li) {
    const ID_ELEMENT_LI = li.id;

    const handlers = {
      ['info']: renderCardInfo, 
      ['common']: renderCardCommon
    };

    const handler = handlers[ID_ELEMENT_LI];
    if (handler) handler();
  };

  function renderCardInfo() {
    utils.cleanCard();
    card.innerHTML = text.INFO_CARD;
  };

  function renderCardCommon() {
    utils.cleanCard();
    card.innerHTML = text.getCommonCardText();
  };
    
