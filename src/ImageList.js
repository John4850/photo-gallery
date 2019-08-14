// import Card from './Card.js';
import Component from './Component.js';

class ImageList extends Component {

    onRender(dom) {
        const images = this.props.images;

        images.forEach(image => {
            // const card = new Card({ image });
            // const cardDOM = card.renderDOM();
            // dom.appendChild(cardDOM);
            console.log(image);
        });
    }

    renderHTML() {
        return /*html*/`
            <ul id="cardbox"></ul>
        `;
    }
}

export default ImageList;