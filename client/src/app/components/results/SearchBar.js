import React from 'react'

const SearchBar = ({searchText, onSearchTextChange, onEnterPressed}) => {

    const handleTextChange = (ev) => {
        if (typeof onSearchTextChange === 'function') {
            onSearchTextChange(ev.target.value)
        }
    }

    const handleEnterKeyPressed = (ev) => {
        if (typeof onEnterPressed === 'function' && ev.key === 'Enter') {
            ev.preventDefault();
            onEnterPressed(searchText)
        }
    }

    return (
        <div className="search-bar">
            <form>
                <label>search 
                    <input type="text" placeholder="Search movies and series..." value={searchText} onChange={handleTextChange} onKeyPress={handleEnterKeyPressed}/>
                </label>
            </form>
        </div>
    )
}

export default SearchBar
