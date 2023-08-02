import { CommonDecontraction } from './common_decontraction.js'

export class WordCounter {
    constructor(text) {
      const meta  = 'meta';
      const count = 'count';

      this._allWordCount = 0;
     /**
      * Data structure containing word count and metadata:
      * @typedef {Object} this._wordContainer
      * @property {Object} meta - Contains keys representing
      * word lengths and values representing the quantity 
      * of words with that length.
      * @property {Object} count - Contains keys representing
      * word lengths. Each value is an object with words as
      * keys and their corresponding quantities as values.
      * @example
      * {
      *   meta: { '1': 1, '3': 2, '4': 1, '5': 2, '8': 1, 'all word': 7 },
      *   count: {
      *     '1': { i: 1 },
      *     '3': { has: 2 },
      *     '4': { like: 1 },
      *     '5': { would: 1, bread: 1 },
      *     '8': { bukowski: 1 }
      *   }
      * }
      */
      this._wordContainer = {
         meta: {"all word": this._allWordCount}, 
         count: {}
      };
      this._META = this._wordContainer[meta];
      this._COUNT = this._wordContainer[count];

      this._text = text;
      this._regEx = /\b(\d+[,.]\d+|\w+\'\w+|\w+)\b/gi;
      this._shouldContinueFlag = true;

      this._startDistributed();
    }
    _startDistributed() {
      let word = this._giveWordsFromText();
      
      do {
        this._keyWordLengthCreator(word);
        this._recordWord(word);
        word = this._giveWordsFromText();
      }

      while (this._shouldContinueLoop(word));  
    }
    _shouldContinueLoop(word) {
      return word.length > 0 && this._shouldContinueFlag;
    }
    /**
     * Extracts word or words from the text preserving their order.
     * @returns {Array} - Array with words for counting.
     */
    _giveWordsFromText() {
      let word = this._regEx.exec(this._text)?.[0];
      if (!word) return [];

      if (this._isContraction(word)) {
        return this._divideContraction(word);
      };
      return [word];
    }
    /**
     * Define word in the contraction and new string
     * without the contraction.
     * For that define the contraction exactly
     * need to pass next word after the contraction
     * to CommonDecontraction.deduceFullWord();
     * @param {String} word - string with contraction
     * @example "I'd like"
     * @returns {Arrray} with decontraction 
     * @example ["I", "would", "like"];
     */
    _divideContraction(word) {
      let temp = '';
      temp = word;
      word = this._regEx.exec(this._text)?.[0];
      if (!Boolean(word)) { 
        this._shouldContinueFlag = false;
        return CommonDecontraction.deduceFullWord(temp);
      };
      return CommonDecontraction.deduceFullWord(temp.concat(' ',word)).concat(word);
    }
    /**
     * Creates an empty object in this.wordContainer for each word length,
     * if the corresponding key for that word length doesn't already exist.
     * Empty object in the key "count" will be contain count of each word,
     * and the "meta" key will be contain sum of all count this word length.
     * @param {Array} words - An array of words.
     */
    _keyWordLengthCreator(words) {
      words.forEach(word => {
        if (!this._COUNT[word.length]) {
             this._COUNT[word.length] = {};
             this._META[word.length] = 0;
        };
      });
    }
    /**
     * Save the word as key's name in the wordContainer object 
     * if it is not defined, and appoints count this word as 1.
     * Otherwise, increase the count by 1
     * @param {String} word - word for counting 
     */
    _recordWord(words) {
      words.forEach(word => {
        this._incrementAllWordCount();

        if (word && typeof word === 'string') {
          this._incrementWordCount(word.toLowerCase());
        }
      });
    }
    _incrementAllWordCount() {
      this._META["all word"]++;
    }
    /**
     * Creat key in the this._COUNT that is the same name 
     * as word and initializes value 1 that mean word's count.
     * If the word is in the this._COUNT increase count variable;
     * @param {Arraay} word - array with word for counting;
     */
    _incrementWordCount(word) {
      if (!this._COUNT[word?.length][word]) {
        this._COUNT[word?.length][word] = 1;
        this._META[word?.length]++;
      } else {
        this._COUNT[word?.length][word]++;
        this._META[word?.length]++;
      };
    }
    /**
     * Check if the word contains an apostrophe (contraction)
     * @param {string} word - The word to check
     * @returns {boolean} - True if the word contains an apostrophe, otherwise false
     */
    _isContraction(word) {
      if (!word) return null;

      const contractionRegExp = /'/;
      return word.search(contractionRegExp) >= 0;
    }
    get wordContainer() {
      return this._wordContainer;
    }
  }
  const text = "I'd like bread. Has has Bukowski";
// const text = "I'd "
// const text = "would bread would"
let contrainer = new WordCounter(text);
console.log(contrainer.wordContainer);

// import { CommonDecontraction } from './common_decontraction.js';

// export class WordCounter {
//     constructor(text) {
//       const COUNT_KYE = 'count';
//       const META_KEY = 'meta';

//       this._text = text;
//       this._regEx = /\b(\d+[,.]\d+|\w+\'\w+|\w+)\b/gi;
//       this._allWordCount = 0;
//       this._shouldContinueFlag = true;
//       this._wordContainer = {
//         "meta": {"all word": this._allWordCount}, 
//         "count": {}
//       };
//       this._startDistributed();
//     }
//     /**
//      *
//      */
//     _startDistributed() {
//       let word = this._giveWordsFromText();
      
//       do {
//         this._keyWordLengthCreator(word);
//         this._recordWord(word);
//         word = this._giveWordsFromText();
//       }

//       while (this._shouldContinueLoop(word));  
//     }
//     _shouldContinueLoop(word) {
//       return word.length > 0 && this._shouldContinueFlag;
//     }
//     /**
//      * Extracts word or words from the text preserving their order.
//      * @returns {Array} - Array with words for counting.
//      */
//     _giveWordsFromText() {
//       let word = this._regEx.exec(this._text)?.[0];
//       if (!word) return [];

//       if (this._isContraction(word)) {
//         return this._divideContraction(word);
//       }
//       return [word];
//     }
//     /**
//      * Define word in the contraction and new string
//      * without the contraction.
//      * For that define the contraction exactly
//      * need to pass next word after the contraction
//      * to CommonDecontraction.deduceFullWord();
//      * @param {String} word - string with contraction
//      * Example: "I'd like"
//      * @returns {Arrray} with decontraction 
//      * Example: ["I", "would", "like"];
//      */
//     _divideContraction(word) {
//       let temp = '';
//       temp = word;
//       word = this._regEx.exec(this._text)?.[0];
//       if (!Boolean(word)) { 
//         this._shouldContinueFlag = false;
//         return CommonDecontraction.deduceFullWord(temp);
//       }
//       return CommonDecontraction.deduceFullWord(temp.concat(' ',word)).concat(word);
//     }
//     /**
//      * Creates an empty object in this.wordContainer for each word length,
//      * if the corresponding key for that word length doesn't already exist.
//      * Empty object in the key "count" will be contain count of each word,
//      * and the "meta" key will be contain sum of all count this word length.
//      * @param {Array} words - An array of words.
//      */
//     _keyWordLengthCreator(words) {
//       const countKey = "count";
//       const metaKey = "meta";

//       words.forEach(word => {
//         if (!this._wordContainer[countKey][word.length]) {
//           this._wordContainer[countKey][word.length] = {};
//           this._wordContainer[metaKey][word.length] = 0;
//         };
//       });
//     };
//     /**
//      * Save the word as key's name in the wordContainer object 
//      * if it is not defined, and appoints count this word as 1.
//      * Otherwise, increase the count by 1
//      * @param {String} word - word for counting 
//      */
//     _recordWord(words) {
//       const countKey = "count";
//       const metaKey = "meta";

//       words.forEach(word => { 
//         this._wordContainer[metaKey]["all word"]++;
//         word = word.toLowerCase();

//         if (!this._wordContainer[countKey][(word)?.length][word]) {
//           this._wordContainer[countKey][(word)?.length][word] = 1;
//           this._wordContainer[metaKey][(word)?.length]++;
//         } 
//         else {
//           this._wordContainer[countKey][(word)?.length][word]++;
//           this._wordContainer[metaKey][(word)?.length]++;
//         }
//       });
//     }
//     /**
//      * Check if the word contains an apostrophe (contraction)
//      * @param {string} word - The word to check
//      * @returns {boolean} - True if the word contains an apostrophe, otherwise false
//      */
//     _isContraction(word) {
//       if (!word) return null;

//       const contractionRegExp = /'/;
//       return word.search(contractionRegExp) >= 0;
//     }
//     /**
//      * Getter
//      * @return {Object} - object with counted word
//      * Example: { 
//      *    '1': { I: 1 }, 
//      *    '4': { like: 1 },
//      *    '5': { would: 1, bread: 1 } 
//      * }
//      */
//     get wordContainer() {
//       return this._wordContainer;
//     }
//   }
  // const text = "I'd like bread. Has has Bukowski";
// const text = "I'd "
// const text = "would bread would"
// let contrainer = new WordCounter( text);
// console.log(contrainer.wordContainer)
