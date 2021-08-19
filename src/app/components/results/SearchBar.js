import React from 'react'

const SearchBar = ({filterText, onFilterTextChange, onEnterPressed}) => {

    const handleTextChange = (ev) => {
        if (typeof onFilterTextChange === 'function') {
            onFilterTextChange(ev.target.value)
        }
    }

    const handleEnterKeyPressed = (ev) => {
        if (typeof onEnterPressed === 'function' && ev.key === 'Enter') {
            ev.preventDefault();
            onEnterPressed(filterText)
        }
    }

    return (
        <div className="search-bar">
            <form>
                <label>search 
                    <input type="text" placeholder="Search movies and series..." value={filterText} onChange={handleTextChange} onKeyPress={handleEnterKeyPressed}/>
                </label>
            </form>
        </div>
    )
}

export default SearchBar
