import Component from './Component.js';

class SearchFilter extends Component {
    onRender(dom) {
        const onSearch = this.props.onSearch;
        const onSort = this.props.onSort;
        const hideMenu = this.props.hideMenu;
        const selectBox = dom.querySelector('#search-by');

        selectBox.addEventListener('input', () => {
            onSearch(selectBox.value);
            const selected = document.querySelectorAll('input');
            [...selected].forEach(button => {
                if(button.checked) {
                    onSort(document.querySelector('input:checked').value);
                }
            });
            hideMenu();
        });
    }

    renderHTML() {
        const images = this.props.images;

        const keyword = getUniqueKeyword(images);
        const keywordHTML = renderKeywordsHTML(keyword);

        return /*html*/`
        <div><h3>Search by keyword:</h3>
        <select id="search-by">
            <option value="all">All The Horns</option>
            ${keywordHTML}
        </select></div>
        `;
    }
}
function renderKeywordsHTML(keywords) {
    const keywordsArray = keywords.map(keyword => {
        return /*html*/`
        <option value="${keyword}">${keyword}</option>
        `;
    });
    return keywordsArray.join('');
}

function getUniqueKeyword(images) {
    const keywords = [];
    images.forEach(image => {
        if(!keywords.includes(image.keyword)) {
            keywords.push(image.keyword);
        }
    });
    keywords.sort();
    return keywords;

}

export default SearchFilter;