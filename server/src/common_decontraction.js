import nlp from 'compromise'
/**
 * The CommonDecontraction class serves to deduce the full word from 
 * a contraction form. It receives a common contraction, for example, 
 * "I'm", and can deduce the full word "am".
 * 
 * WARNING!!!
 * 
 * In contractions with the letter "d", for example, "they'd," it cannot be
 * determined what "d" stands for. However, this can be determined by the
 * next word. If the word that follows this construction is a noun,
 * adjective, or the third form of a verb, then "d" means "had." 
 * Otherwise, it means "would."
 */
export class CommonDecontraction {
  /**
   * Deduces the full word from the contraction form.
   * @param {String} str - The contraction to be deduced.
   * Example: "they'd like".
   * @returns {Array} - The full word deduced from the contraction.
   * Example: ["they", "would", "like"]
   */
  static deduceFullWord(str) {
      return this._expandContraction(str).split(" ");
  };
  /**
   * Expands the contraction into its full form.
   * @param {String} str - The contraction to be expanded.
   * Example: "they'd like", "I'm", "I've"
   * @returns {String} - The expanded form of the contraction.
   * Example: "they would", "I am", "I have"
   */
  static _expandContraction(str) {
      return nlp(str).contractions().expand().text();
  };
};

// console.log(nlp('I\'m good').contractions().expand().text())
// console.log(CommonDecontraction.deduceFullWord('I\'m good'));
// console.log(nlp("has").has('#Verb'))
// console.log(nlp("has").has('#Verb'))