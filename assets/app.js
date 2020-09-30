import {FetchSearch} from './js/api/fetch.js';
import {showAnime} from './js/services/viewAnime.js';

const searchInput = document.querySelector('[data-input]');

searchInput.addEventListener('keydown', (e)=> {
    if(e.key == 'Enter'){
        const queryFromAnilist = new FetchSearch(searchInput.value).sendFetch();
        showAnime(queryFromAnilist);
    }
})
