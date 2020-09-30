const animeContainer = document.querySelector('[data-results]');

export const showAnime = queryResult =>{
    animeContainer.innerHTML = '';
    queryResult.then(res => {
        res.data.Page.media.map(anime => 
            animeContainer.innerHTML += `<div class="card">
            <img class="card__image"></img>
            <div class="card__info">
                <div class="card__desc">
                <a class="card__link" target="_blank" href="https://anilist.co/anime/${anime.id}/${urlName(anime.title.romaji)}">Link</a>
                </div>
                <div class="card__title">${anime.title.romaji}</div>
            </div>
        </div>`
    )})
}

const urlName = title => {
    return title.replace(/[\W]+/g,'-');
}