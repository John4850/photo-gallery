import Component from './Component.js';

class SearchFilter extends Component {
    onRender() {
        // const onSearch
    }
    
    renderHTML() {
        return /*html*/`
        <div><h3>Search by keyword:</h3>
        <select id="search-by">
            <option value=""></option>
        </select></div>
        `;
    }
}

export default SearchFilter;