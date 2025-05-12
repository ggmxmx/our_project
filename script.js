fetch("https://rickandmortyapi.com/api/character")
        .then(response => response.json())
        .then(data => {
          const container = document.getElementById('content');
          data.results.forEach(character => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'item'; // Optional: Add CSS class
            itemDiv.innerHTML = `
               <h3>${character.name}</h3>
        <p>Status: ${character.status}</p>
        <p>Species: ${character.species}</p>
        <p>Gender: ${character.gender}</p>
        <img src="${character.image}" alt="${character.name}" />
            `;
            container.appendChild(itemDiv);

            console.log(character);
            
          });
        })
        .catch((error) => {
            console.log("Error fetching categories:", error);
        });
            
    
