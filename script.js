export let ownedCharacters = JSON.parse(localStorage.getItem('ownedCharacters')) || [];
export let allCharacters = [];

function displayCharacters(charactersToDisplay) {
    const container = document.getElementById('content');
    container.innerHTML = ''; 
    
    charactersToDisplay.forEach(character => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';
        
        itemDiv.innerHTML = `
            <button class="own-button">${character.isOwned ? "Unown" : "Own"}</button>
            <div>
                <h3>${character.name}</h3>
                <p>Status: ${character.status}</p>
                <p>Species: ${character.species}</p>
                <p>Gender: ${character.gender}</p>
            </div>
            <img src="${character.image}" alt="${character.name}" />
        `;
        
        container.appendChild(itemDiv);
        
        const ownButton = itemDiv.querySelector('.own-button');
        
        if (character.isOwned) {
            itemDiv.classList.add('owned');
        }
        
        ownButton.addEventListener('click', () => {
            character.isOwned = !character.isOwned;
            
            if (character.isOwned) {
                itemDiv.classList.add('owned');
                ownButton.innerText = "Unown";
            } else {
                itemDiv.classList.remove('owned');
                ownButton.innerText = "Own";
            }
            
            ownedCharacters = allCharacters.filter(c => c.isOwned);
            localStorage.setItem('ownedCharacters', JSON.stringify(ownedCharacters));
        });
        
        if (character.species === "Human") {
            itemDiv.classList.add('locked');
            ownButton.remove();
        }
    });
}

fetch("https://rickandmortyapi.com/api/character")
    .then(response => response.json())
    .then(data => {
        
        allCharacters = data.results.map(character => ({
            ...character,
            isOwned: ownedCharacters.some(c => c.id === character.id)
        }));
        
        displayCharacters(allCharacters);
        
        const searchInput = document.getElementById('search');
        searchInput.addEventListener('input', (event) => {
            const searchTerm = event.target.value.toLowerCase();
            const filteredCharacters = allCharacters.filter(character =>
                character.name.toLowerCase().includes(searchTerm)
            );
            displayCharacters(filteredCharacters);
        });
    })
    .catch((error) => {
        console.log("Error fetching characters:", error);
    });