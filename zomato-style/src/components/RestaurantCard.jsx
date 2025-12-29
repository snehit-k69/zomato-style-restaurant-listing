const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="restaurant-card">
      <img
  src={restaurant.image}
  alt={restaurant.name}
  className="restaurant-image"
  onError={(e) => {
    e.target.onerror = null;
    e.target.src =
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80";
  }}
/>



      <div className="restaurant-info">
        <div className="restaurant-header">
          <h3>{restaurant.name}</h3>
          <span className="rating">⭐ {restaurant.rating}</span>
        </div>

        <p className="cuisine">{restaurant.cuisine}</p>

        <div className="meta">
          <span>{restaurant.priceRange}</span>
          <span>•</span>
          <span>{restaurant.distance}</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
