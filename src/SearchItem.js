const SearchItem = ({search, setSearch}) => {
    return(
        <form className='searchForm' onSubmit={(e) => e.preventdefault()}>
        <label htmlFor='search'>search</label>
        <input id='search' type='text' placeholder='search-Item' role='searchbox' value={search} onChange={(e) => setSearch(e.target.value)}/>
        </form>
    )
}

export default SearchItem;