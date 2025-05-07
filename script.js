fetch("https://api.escuelajs.co/api/v1/categories")
        .then(response => response.json())
        .then(items => {
          const container = document.getElementById('content');
          
          items.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'item'; // Optional: Add CSS class
            itemDiv.innerHTML = `
              <h3>${item.name}</h3>
              <p>${item.price}</p>
              <img src="${item.image}" alt="${item.name}" style="width: 100px; height: 100px;" />
            `;
            container.appendChild(itemDiv);

            console.log(item);
            
          });
        })
        .catch((error) => {
            console.log("Error fetching categories:", error);
        });
            
    
