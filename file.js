//SELECTORS 

const memeBtn = document.querySelector('button');
const meme = document.querySelector('.meme');
const memeAuthor = document.querySelector('.meme-author');

//EVENT LISTENERS 

memeBtn.addEventListener('click', generateMeme)

//FUNCTION 

function updateDetails(url, author){
    meme.setAttribute('src', url);
    memeAuthor.innerHTML = author;
}

function generateMeme() {
    fetch('https://meme-api.com/gimme').then(response => response.json()).then(data => updateDetails(data.url, data.author))
}

