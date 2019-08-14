import Component from './Component.js';

class Hamburger extends Component {

    onRender(dom) {
        const hamburgerButton = dom.querySelector('#hamburger-button');
        const hamburgerDropdown = dom.querySelector('#hamburger-dropdown');

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
                    <div><h3>Search by keyword:</h3>
                        <select id="search-by">
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select></div>
                        <h3>Sort by:</h3>
                       <input type="radio" name="sort-type" id="title">Title</input>
                       <input type="radio" name="sort-type" id="horns">Horns</input>

        `;
    }
}

export default Hamburger;