import Component from './Component.js';
import Hamburger from './Hamburger.js';

class Header extends Component {

    onRender(dom) {
        const hamburger = new Hamburger();
        const hamburgerDOM = hamburger.renderDOM();
        dom.prepend(hamburgerDOM);
    }


    renderHTML() {
        return /*html*/`
            <header>
            
                </div>
            </div>
            <h1>Gallery of Horns</h1>
        </header>
        `;
    }
}

export default Header;