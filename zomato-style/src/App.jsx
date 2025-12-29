import { useState } from "react";
import restaurants from "./data/restaurants.json";
import RestaurantCard from "./components/RestaurantCard";
import EmptyState from "./components/EmptyState";

function App() {
  const [searchText, setSearchText] = useState("");
  const [selectedCuisine, setSelectedCuisine] = useState("");
  const [minRating, setMinRating] = useState("");

  const filteredRestaurants = restaurants.filter((restaurant) => {
    const matchesSearch =
      restaurant.name.toLowerCase().includes(searchText.toLowerCase()) ||
      restaurant.cuisine.toLowerCase().includes(searchText.toLowerCase());

    const matchesCuisine =
      selectedCuisine === "" || restaurant.cuisine === selectedCuisine;

    const matchesRating =
      minRating === "" || restaurant.rating >= Number(minRating);

    return matchesSearch && matchesCuisine && matchesRating;
  });

  return (
    <div className="app">
      <header className="header">
        <h1>Zomato Restaurants listing</h1>
      </header>

      <div className="page-container">
        <div className="filters">
          <input
            type="text"
            placeholder="Search for restaurant or cuisine"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <select
            value={selectedCuisine}
            onChange={(e) => setSelectedCuisine(e.target.value)}
          >
            <option value="">All Cuisines</option>
            <option value="Indian">Indian</option>
            <option value="Italian">Italian</option>
            <option value="Chinese">Chinese</option>
          </select>

          <select
            value={minRating}
            onChange={(e) => setMinRating(e.target.value)}
          >
            <option value="">All Ratings</option>
            <option value="4">4★ & above</option>
            <option value="4.5">4.5★ & above</option>
          </select>
        </div>

        <div className="restaurant-list">
          {filteredRestaurants.length > 0 ? (
            filteredRestaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant.id}
                restaurant={restaurant}
              />
            ))
          ) : (
            <EmptyState />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
