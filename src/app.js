import ImageList from './ImageList.js';
import Component from './Component.js';
import Header from './Header.js';
import images from './images.js';

class App extends Component {

    onRender(dom) {
        let cards = images;
        let filtered = false;
        let filteredArray = images;

        const headerProps = {
            images: images,
            onSearch: (keyword) => {
                let filteredHorns;
                if(keyword === 'all') {
                    filteredHorns = images;
                    filtered = false;
                } else {
                    filteredHorns = images.filter(image => {
                        return image.keyword === keyword;
                    });
                    filtered = true;
                    filteredArray = filteredHorns;
                }
                const updateProps = { images: filteredHorns };
                imageList.update(updateProps);

            },
            onSort: (sortBy) => {
                if(filtered) {
                    cards = filteredArray;
                } else {
                    cards = images;
                }
                let sortedHorns;
                if(sortBy === 'title') {
                    sortedHorns = cards.sort((a, b) => {
                        if(a.title > b.title) {
                            return 1;
                        } else {
                            return -1;
                        }
                    });
                } else {
                    sortedHorns = cards.sort((a, b) => {
                        return a.horns - b.horns;
                    });
                }
                const updateProps = { cards: sortedHorns };
                imageList.update(updateProps);
            }
        };
        const header = new Header(headerProps);
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