import { renderImage } from './render-image.js';
import images from './images.js';
import htmlToDOM from './html-to-DOM.js';
const cardBox = document.getElementById('cardbox');
const hamburgerButton = document.getElementById('hamburger-button');
const hamburgerDropdown = document.getElementById('hamburger-dropdown');

images.forEach((card) => {
    const renderedCard = renderImage(card);
    const dom = htmlToDOM(renderedCard);
    cardBox.appendChild(dom);

});

hamburgerButton.addEventListener('click', () => {
    if(hamburgerDropdown.className === 'hidden') {
        hamburgerDropdown.classList.remove('hidden');
    } else {
        hamburgerDropdown.classList.add('hidden');
    }
});