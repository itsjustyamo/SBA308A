// script.js

const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const resultsDiv = document.getElementById('results');

searchButton.addEventListener('click', async () => {
    const searchTerm = searchInput.value.trim();
    if (searchTerm !== '') {
        try {
            const response = await fetch(`'https://anilistmikilior1v1.p.rapidapi.com/userSearch'${searchTerm}`);
            const data = await response.json();
            displayResults(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
});

function displayResults(data) {
    resultsDiv.innerHTML = ''; // Clear previous results
    data.forEach(manga => {
        const mangaDiv = document.createElement('div');
        mangaDiv.classList.add('manga');
        mangaDiv.textContent = manga.title;
        resultsDiv.appendChild(mangaDiv);
    });
}