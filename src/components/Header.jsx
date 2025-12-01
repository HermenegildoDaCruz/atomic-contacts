export default function Header({ onStartCreating }) {
  return (
    <header className="header">
      <div className="header-search-box">
        <input
          type="search"
          name="search"
          className="search-input"
          placeholder="Search contacts by name"
        />
        <button className="btn--primary" onClick={onStartCreating}>
          <ion-icon name="add-outline" className="icon"></ion-icon>
          <span>Create</span>
        </button>
      </div>
      <div className="header-filters-box">
        <select name="filter" className="filter-contacts">
          <option value="a-z">Orber by name A-Z</option>
          <option value="z-a">Orber by name Z-A</option>
          <option value="">Order by creation date</option>
        </select>
        <button className="btn">
          <ion-icon name="star-outline" className="icon"></ion-icon>
          {/* <ion-icon name="star"></ion-icon> */}
        </button>
      </div>
    </header>
  );
}
