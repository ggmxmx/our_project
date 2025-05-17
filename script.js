fetch("https://rickandmortyapi.com/api/character")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('content');
    data.results.forEach(character => {
      const itemDiv = document.createElement('div');
      const ownButton = document.createElement('button');
      ownButton.innerText = "Own";
      itemDiv.className = 'item'; // Optional: Add CSS class
      container.appendChild(itemDiv);
      itemDiv.innerHTML = `
              <h3>${character.name}</h3>
              <p>Status:<br> ${character.status}</p>
              <p>Species:<br> ${character.species}</p>
              <p>Gender:<br> ${character.gender}</p>
              <img src="${character.image}" alt="${character.name}" />
            `;
            itemDiv.appendChild(ownButton);
            

            ownButton.addEventListener('click', (isOwned) => {
              isOwned = false
              if (isOwned) {
                isOwned = false;
                itemDiv.classList.remove('owned');
                ownButton.innerText = "Own";
                
                console.log(isOwned);
                
              } else {
                isOwned = true;
                itemDiv.classList.add('owned');
                ownButton.innerText = "Unown";
               
                console.log(isOwned);
              }
            });


     

      console.log("hello")
      console.log(character);

      if (character.species === "Human") {
        itemDiv.className = 'locked';
        itemDiv.removeChild(ownButton);
      }
    });


  })
  .catch((error) => {
    console.log("Error fetching categories:", error);
  });




