import ImageList from './ImageList.js';
import Component from './Component.js';
import Header from './Header.js';
import images from './images.js';

class App extends Component {

    onRender(dom) {

        const header = new Header();
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);

        const imageList = new ImageList({ images });
        const imageListDOM = imageList.renderDOM();
        const mainDiv = dom.querySelector('#main');
        mainDiv.appendChild(imageListDOM);

    }


    renderHTML() {
        return /*html*/`
            <div>
               <!-- header goes here --> 
                <main id="main">
                    
                </main>

                <footer> <h3>&copy Sam and John</h3> </footer>
            </div> 
        `;
    }

}

export default App;