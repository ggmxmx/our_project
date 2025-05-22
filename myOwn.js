import { ownedCharacters } from './script.js';

// Wait for the module to load

	console.log(ownedCharacters);

    ownedCharacters.forEach(character => {
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
                `
               document.body.appendChild(itemDiv); 
    });
     const ownButton = itemDiv.querySelector('.own-button');
     
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
