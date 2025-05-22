let ownedCharacters = [];

fetch("https://rickandmortyapi.com/api/character")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('content');
    // Initialize all characters with isOwned property
    const allCharacters = data.results.map(character => ({
      ...character,
      isOwned: false
    }));
    
    // This will track our owned characters
    
    allCharacters.forEach(character => {
      const itemDiv = document.createElement('div');
      itemDiv.className = 'item';
      
      itemDiv.innerHTML = `
        <button class="own-button">Own</button>
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
      
      ownButton.addEventListener('click', () => {
        // Toggle ownership
        character.isOwned = !character.isOwned;
        
        // Update UI
        if (character.isOwned) {
          itemDiv.classList.add('owned');
          ownButton.innerText = "Unown";
        } else {
          itemDiv.classList.remove('owned');
          ownButton.innerText = "Own";
        }
        
        // Update ownedCharacters list
        ownedCharacters = allCharacters.filter(c => c.isOwned);
        console.log("Owned Characters:", ownedCharacters);
      });
      
      if (character.species === "Human") {
        itemDiv.classList.add('locked');
        ownButton.remove();
      }
    });
  })
  .catch((error) => {
    console.log("Error fetching categories:", error);
  });

  export { ownedCharacters };