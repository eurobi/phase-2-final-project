function Filters({ filters, setFilters }){
    const categories = [
        "",
        "Books",
        "Movies",
        "Shows",
        "Restaurants",
        "Music"
    ]
    const sortOptions = [
        "Rating (High to Low)",
        "Rating (Low to High)"
    ]
    function handleFilterChange(e){
        setFilters({...filters, 
        filter : e.target.value
        })
    }

    function handleSortChange(e){
        setFilters({...filters, 
        sort : e.target.value
        })
    }

    function handleSearchChange(e){
        setFilters({...filters,
        search : e.target.value
    })
    }


    return (
        <div className="filters">
            <div className="filter-item">
                <label for="filter-by">Filter By:</label>
                <select value={filters.filter} onChange={handleFilterChange} id='filter-by'>
                    {categories.map((category) => <option key={category}>{category}</option>)}
                </select>
            </div>
            <div className="filter-item">
                <label for="sort-by">Sort By:</label>
                <select value={filters.sort} onChange={handleSortChange} id='sort-by'>
                    {sortOptions.map((option) => <option key={option}>{option}</option>)}
                </select>
            </div>
            <div className="filter-item">
                <label for='search'>Search:</label>
                <input value={filters.search} onChange={handleSearchChange}></input>
            </div>
        </div>
    )
}


export default Filters