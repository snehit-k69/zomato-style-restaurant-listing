const EmptyState = () => {
  return (
    <div className="empty-state">
      <div className="empty-icon">🍽️</div>
      <h3>No restaurants found</h3>
      <p>Try adjusting your search or filters</p>
    </div>
  );
};

export default EmptyState;
