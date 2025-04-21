function displayRestaurants(list = restaurants) {
  const container = document.getElementById("restaurant-list") || document.getElementById("restaurant-grid");
  if (!container) return;

  container.innerHTML = "";

  list.forEach(restaurant => {
    const div = document.createElement("div");
    div.className = "restaurant-item";
    div.innerHTML = `
      <h3>${restaurant.name}</h3>
      <p><strong>Hours:</strong> ${restaurant.openTime}</p>
      <p><strong>Average Price:</strong> $${restaurant.avgPrice.toFixed(2)}</p>
      <a href="${restaurant.link}" target="_blank">View Menu</a>
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
    <p><strong>Hours:</strong> ${restaurant.openTime}</p>
    <p><strong>Average Price:</strong> $${restaurant.avgPrice.toFixed(2)}</p>
    <a href="${restaurant.link}" target="_blank">View Menu</a>
  `;
  container.appendChild(div);
}

function displayQuote() {
  const quotes = [
    "Life is uncertain. Eat dessert first.",
    "Good food is good mood.",
    "First we eat, then we do everything else.",
    "Eat well, feel well.",
    "Food is fuel, but great food is joy.",
    "Happiness is... ordering food you didn’t cook!"
  ];
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  const quoteBox = document.getElementById("quote-box");
  if (quoteBox) quoteBox.innerText = `💬 ${random}`;
}