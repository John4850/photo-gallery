import Component from './Component.js';

class SortFilter extends Component {


    renderHTML() {
        return /*html*/`
        <div>
        <h3>Sort by:</h3>
        <input type="radio" name="sort-type" id="title">Title</input>
        <input type="radio" name="sort-type" id="horns">Horns</input>
        </div>
        `;
    }
}

export default SortFilter;