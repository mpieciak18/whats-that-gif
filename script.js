const image = document.getElementById('image');
const overlay = document.getElementById('image-overlay');

const fetchGif = async function(keyword) {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=3dm9zfS3BFtWQZVB9gF7PvgbXEU4GkMH&q=${keyword}`;
    try {
        const response = await fetch(url, {mode: 'cors'});
        const results = await response.json();
        const randomResult = results.data[Math.floor(Math.random() * results.data.length)];

        if (typeof randomResult != "undefined") {
            image.onload = () => {overlay.innerHTML = ''};
            image.src = randomResult.images.original.url;
        } else {
            image.onload = () => {overlay.innerHTML = 'Hmm...<br>nothing found.'};
            image.src = "https://media3.giphy.com/media/8GTKaetBL5IVBMr18A/giphy.gif?cid=790b761134632c364317a9a695e545772dfea6dd6438cc88&rid=giphy.gif&ct=g";
        };
    } catch(error) {
        image.onload = () => {overlay.innerHTML = 'Hmm...<br>nothing found.'};
        image.src = "https://media3.giphy.com/media/8GTKaetBL5IVBMr18A/giphy.gif?cid=790b761134632c364317a9a695e545772dfea6dd6438cc88&rid=giphy.gif&ct=g";
    };
};

const searchGif = function(event) {
    event.preventDefault();
    const keyword = document.getElementById('search-text').value;
    fetchGif(keyword);
};

const searchForm = document.getElementById('search-form');
searchForm.addEventListener('submit', searchGif)

// const randomButton = document.getElementById('random-button');
// randomButton.addEventListener('click', () => {alert('success!')});

fetchGif('doge');