import Component from './Component.js';

class SortFilter extends Component {

    onRender(dom) {
        const onSort = this.props.onSort;
        const hideMenu = this.props.hideMenu;
        const radioInput = dom.querySelectorAll('input');
        [...radioInput].forEach(input => {
            input.addEventListener('click', () => {
                const inputValue = input.id;
                onSort(inputValue);
                hideMenu();
            });
        });

    }

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