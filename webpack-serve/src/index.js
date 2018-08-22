import { welcome } from './text'

window.addEventListener('load', () => {
  document.querySelector('body').innerHTML = `<h1>${welcome}</h1>`;
})