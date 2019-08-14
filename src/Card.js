
import Component from './Component.js';

class Card extends Component {
    renderHTML() {
        const data = this.props.image;
        return /*html*/`
            <li class="card ${data.keyword}" title="${data.description}" style="background-image:url('${data.url}')" >
                <div class="title">
                    <h2>${data.title}</h2>
                </div>
                <div class="horn-count">
                    Horns : ${data.horns}
                </div>
            </li >; 
                
            `;
    }
}

export default Card;








