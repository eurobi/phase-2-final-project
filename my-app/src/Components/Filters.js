function Filters({ filters, setFilters }){
    const categories = [
        "",
        "Books",
        "Movies",
        "Shows",
        "Restaurants",
    ]
    const sortOptions = [
        "",
        "Rating (High to Low)",
        "Rating (Low to High)",
        "Date (Newest)",
        "Date (Oldest)"
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
                <select onChange={handleFilterChange} id='filter-by'>
                    {categories.map((category) => <option>{category}</option>)}
                </select>
            </div>
            <div className="filter-item">
                <label for="sort-by">Sort By:</label>
                <select onChange={handleSortChange} id='sort-by'>
                    {sortOptions.map((option) => <option>{option}</option>)}
                </select>
            </div>
            <div className="filter-item">
                <label for='search'>Search:</label>
                <input onChange={handleSearchChange}></input>
            </div>
        </div>
    )
}


export default Filters