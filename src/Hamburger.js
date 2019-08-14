import Component from './Component.js';
import SearchFilter from './SearchFilter.js';
import SortFilter from './SortFilter.js';

class Hamburger extends Component {

    onRender(dom) {

        const hamburgerButton = dom.querySelector('#hamburger-button');
        const hamburgerDropdown = dom.querySelector('#hamburger-dropdown');
        const searchFilterBox = dom.querySelector('#search-filter-box');
        const sortFilterBox = dom.querySelector('#sort-filter-box');

        const hamburgerProps = {
            images: this.props.images,
            onSearch: this.props.onSearch,
            onSort: this.props.onSort,
            hideMenu: () => {
                if(hamburgerDropdown.className === 'hidden') {
                    hamburgerDropdown.classList.remove('hidden');
                } else {
                    hamburgerDropdown.classList.add('hidden');
                }
            }

        };

        console.log(hamburgerProps);
        const searchFilter = new SearchFilter(hamburgerProps);
        const searchFilterDOM = searchFilter.renderDOM();
        searchFilterBox.appendChild(searchFilterDOM);

        const sortFilter = new SortFilter(hamburgerProps);
        const sortFilterDOM = sortFilter.renderDOM();
        sortFilterBox.appendChild(sortFilterDOM);

        hamburgerButton.addEventListener('click', () => {
            if(hamburgerDropdown.className === 'hidden') {
                hamburgerDropdown.classList.remove('hidden');
            } else {
                hamburgerDropdown.classList.add('hidden');
            }
        });

    }

    renderHTML() {
        return /*html*/`
            <div id="hamburger"><img src="./assets/hamburger.png"
                    id="hamburger-button">
                <div id="hamburger-dropdown" class="hidden">
                <div id="search-filter-box"></div>
                <div id="sort-filter-box"></div>
                   </div></div>
                        
        `;
    }
}

export default Hamburger;