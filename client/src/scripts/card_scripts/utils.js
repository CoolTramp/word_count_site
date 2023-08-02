import { getData } from './data.js'

export function cleanCard() {
  card.innerHTML = ' ';
};

export function sortWords(number) {
  const DATA = getData();
  if (isEmptyObject(DATA)) throw new Error('data is not defined');

  return Object.entries(DATA["count"][number]).sort((a,b) => {
      return a[1]-b[1];
  });
};

export function creatTextForCard(word, count) {
  return `${word}: ${count}`;
};

export function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
};