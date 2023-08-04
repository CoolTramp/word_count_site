import Quill from 'quill';
var options = {
  theme: 'bubble',
  placeholder: '...'
};

export const quill = new Quill('#text-area-user-text', options);
