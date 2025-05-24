import { ownedCharacters } from './script.js';
import { allCharacters } from './script.js';
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

               const ownButton = itemDiv.querySelector('.own-button');

      if (character.isOwned) {
        itemDiv.classList.add('owned');
      }

    ownButton.addEventListener('click', () => {
        
        character.isOwned = false


        const updatedOwnedCharacters = allCharacters.filter(c => c.isOwned);
        
        localStorage.setItem('ownedCharacters', JSON.stringify(updatedOwnedCharacters));
        
        console.log("Owned Characters:", ownedCharacters);
      });

    });

    

    
      
     