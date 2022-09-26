function Filters(){
    return (
        <div className="filters">
            <div className="filter-item">
                <label for="filter-by">Filter By:</label>
                <select id='filter-by'>
                    {/* {display options} */}
                </select>
            </div>
            <div className="filter-item">
                <label for="sort-by">Sort By:</label>
                <select id='sort-by'>
                    {/* {display options} */}
                </select>
            </div>
            <div className="filter-item">
                <label for='search'>Search:</label>
                <input></input>
            </div>
        </div>
    )
}


export default Filters