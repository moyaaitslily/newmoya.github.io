function displayRestaurants(list = restaurants) {
    const container = document.getElementById("restaurant-list") || document.getElementById("restaurant-grid");
    if (!container) return;
  
    container.innerHTML = "";
  
    list.forEach(restaurant => {
      const div = document.createElement("div");
      div.className = "restaurant-item";
      div.innerHTML = `
        <h3>${restaurant.name}</h3>
        <p><strong>Hours:</strong> ${restaurant.hours}</p>
        <p><strong>Price Range:</strong> ${restaurant.priceRange}</p>
        ${restaurant.hasWebsite
            ? `<a href="${restaurant.link}" target="_blank">View Menu</a>`
            : `<a href="${restaurant.menuImage}" target="_blank">
                 <img src="${restaurant.menuImage}" alt="${restaurant.name} Menu" class="menu-thumbnail">
               </a>`}
      `;
      container.appendChild(div);
    });
  }
  
  function sortByPrice() {
    const sorted = [...restaurants].sort((a, b) => a.avgPrice - b.avgPrice);
    displayRestaurants(sorted);
  }
  
  function showRandomRestaurant() {
    const container = document.getElementById("restaurant-list") || document.getElementById("restaurant-grid");
    if (!container) return;
  
    container.innerHTML = "";
  
    const restaurant = restaurants[Math.floor(Math.random() * restaurants.length)];
    const div = document.createElement("div");
    div.className = "restaurant-item";
    div.innerHTML = `
      <h3>${restaurant.name}</h3>
      <p><strong>Hours:</strong> ${restaurant.hours}</p>
      <p><strong>Price Range:</strong> ${restaurant.priceRange}</p>
      ${restaurant.hasWebsite
        ? `<a href="${restaurant.link}" target="_blank">View Menu</a>`
        : `<a href="${restaurant.menuImage}" target="_blank">
             <img src="${restaurant.menuImage}" alt="${restaurant.name} Menu" class="menu-thumbnail">
           </a>`}
    `;
    container.appendChild(div);
  }
  function sortByPrice() {
    const sorted = [...restaurants].sort((a, b) => {
      const priceA = parseFloat(a.priceRange.replace(/[^0-9.]/g, '').split("–")[0]);
      const priceB = parseFloat(b.priceRange.replace(/[^0-9.]/g, '').split("–")[0]);
      return priceA - priceB; // Lowest to highest
    });
  
    displayRestaurants(sorted);
  }
  
  