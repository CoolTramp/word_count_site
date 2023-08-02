let _DATA = {};

export function getData() {
  return _DATA;
};

export function setData(data) {
  _DATA = Object.assign(data);
};

// let _DATA =  {
//   meta: { '1': 1, '3': 2, '4': 1, '5': 2, '8': 1, 'all word': 7 },
//   count: {
//     '1': { i: 1 },
//     '3': { has: 2 },
//     '4': { like: 1 },
//     '5': { would: 1, bread: 1 },
//     '8': { bukowski: 1 }
//   }
// };