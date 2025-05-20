fetch("https://rickandmortyapi.com/api/character")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('content');
    data.results.forEach(character => {
      const itemDiv = document.createElement('div');
      itemDiv.className = 'item'; // Optional: Add CSS class
      
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
      
      // Get the button that's actually in the DOM
      const ownButton = itemDiv.querySelector('.own-button');
      
      
      ownButton.addEventListener('click', () => {
        const isOwned = itemDiv.classList.contains('owned');
        if (isOwned) {
          itemDiv.classList.remove('owned');
          ownButton.innerText = "Own";
        } else {
          itemDiv.classList.add('owned');
          ownButton.innerText = "Unown";
        }
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