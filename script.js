fetch("https://myfakeapi.com/api/cars/")
        .then(response => response.json())
        .then(cars => {
          const container = document.getElementById('content');
          cars.forEach(car => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'item'; // Optional: Add CSS class
            itemDiv.innerHTML = `
              <h3>${car.car}</h3>
                <p>${car.model}</p>
                <p>${car.price}</p>
                <p>${car.car_color}</p>
            
            `;
            container.appendChild(itemDiv);

            console.log(car);
            
          });
        })
        .catch((error) => {
            console.log("Error fetching categories:", error);
        });
            
    
