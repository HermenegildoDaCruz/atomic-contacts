export default function Header(){
    return <header className="header">
        <div className="header-search-box">
            <input type="search" name="search" className="search-input" placeholder="Search contacts by name" />
            <button className="btn--primary">
                <ion-icon name="add-outline" className="icon"></ion-icon>
                <span>Create</span>
            </button>
        </div>
        <div className="header-filters-box">
            <select name="filter" className="filter-contacts">
                <option value="">Orber by name</option>
                <option value="">Order by creation date</option>
            </select>
            <button className="btn">
                <ion-icon name="star-outline" className = "icon"></ion-icon>
                {/* <ion-icon name="star"></ion-icon> */}
            </button>
        </div>
    </header>
}