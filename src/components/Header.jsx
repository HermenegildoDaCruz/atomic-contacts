import { memo } from "react";

export default memo(function Header({
  filter,
  onStartCreating,
  onSetFilter,
  onSearch,
  onShowFavorites,
}) {
  return (
    <header className="header">
      <div className="header-search-box">
        <input
          type="search"
          name="search"
          className="search-input"
          placeholder="Search contacts by name"
          onChange={(e) => onSearch(e.target.value)}
        />
        <button className="btn--primary" onClick={onStartCreating}>
          <ion-icon name="add-outline" className="icon"></ion-icon>
          <span>Create</span>
        </button>
      </div>
      <div className="header-filters-box">
        <select
          name="filter"
          className="filter-contacts"
          onClick={(e) => onSetFilter(e.target.value)}
        >
          <option value="a-z">Orber by name A-Z</option>
          <option value="z-a">Orber by name Z-A</option>
        </select>
        <button className="btn" onClick={onShowFavorites}>
          {filter === "fav" ? (
            <ion-icon name="star" className="icon"></ion-icon>
          ) : (
            <ion-icon name="star-outline" className="icon"></ion-icon>
          )}
        </button>
      </div>
    </header>
  );
});
