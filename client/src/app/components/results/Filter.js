import React from 'react'
import { Loading, Error } from '../handling'
import useFetch from '../../hooks/useFetch'

const API_GENRES = 'https://api.themoviedb.org/3/genre/movie/list?api_key=2f5b9ef34b8e55a476b82fbd9a6367e1&language=en-US'

const Filter = ({filter, onFilterChange/* searchText, onSearchTextChange, onEnterPressed */}) => {

    /* const handleTextChange = (ev) => {
        if (typeof onSearchTextChange === 'function') {
            onSearchTextChange(ev.target.value)
        }
    }


    const handleEnterKeyPressed = (ev) => {
        if (typeof onEnterPressed === 'function' && ev.key === 'Enter') {
            ev.preventDefault();
            onEnterPressed(searchText)
        }
    } */

    const handleSelection = (ev) => {
        if (typeof onFilterChange === 'function') {
            onFilterChange(ev.target.value)
        }
    }
    const [data, isLoading, error] = useFetch(API_GENRES); 

    return (
        <div className="filter">
            <form>
                <label htmlFor="filter-ddn">filter</label>
                { error ? <Error>{error}</Error> : 
                isLoading || !data ? 
                <Loading/> :
                <select id="filter-ddn" onChange={handleSelection}>{data.genres.map(g => <option key={g.id} value={g.id}>{g.name}</option>)}</select>
                }
            </form>
        </div>
    )

    {/* <input type="text" placeholder="Search movies and series..." value={searchText} onChange={handleTextChange} onKeyPress={handleEnterKeyPressed}/> */}
}

export default Filter
