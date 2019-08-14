import Component from './Component.js';

class SearchFilter extends Component {
    onRender() {
        // const onSearch
    }
    
    renderHTML() {
        const images = this.props.images;
        const keyword = getUniqueKeyword(images);
        const keywordHTML = renderKeywordsHTML(keyword);

        return /*html*/`
        <div><h3>Search by keyword:</h3>
        <select id="search-by">
            <option value="All">All The Horns</option>
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