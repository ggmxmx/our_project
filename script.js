export let ownedCharacters = JSON.parse(localStorage.getItem('ownedCharacters')) || [];
export let allCharacters = [];
fetch("https://rickandmortyapi.com/api/character")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('content');
    
    // Initialize all characters with isOwned property (check if already owned)
      allCharacters = data.results.map(character => ({
      ...character,
      isOwned: ownedCharacters.some(c => c.id === character.id) // Restore ownership state
    }));
    
    allCharacters.forEach(character => {
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
        
        // Update ownedCharacters list
        ownedCharacters = allCharacters.filter(c => c.isOwned);
        
        // Save to localStorage
        localStorage.setItem('ownedCharacters', JSON.stringify(ownedCharacters));
        
        console.log("Owned Characters:", ownedCharacters);
      });
      
      if (character.species === "Human") {
        itemDiv.classList.add('locked');
        ownButton.remove();
      }
    });
  })
  .catch((error) => {
    console.log("Error fetching characters:", error);
  });

