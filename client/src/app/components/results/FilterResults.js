import { useEffect, useState } from 'react';
import React from 'react'
import FilterResultsList from './FilterResultsList';
import Filter from './Filter'
import useFetch from '../../hooks/useFetch';

const API_FILTER = '';

const FilterResults = () => {
    const [filter, setFilter] = useState('');
    /* const [enterFilter, setEnterFilter] = useState(''); */

    /* const [data] = useFetch(`https://api.themoviedb.org/3/search/multi?api_key=2f5b9ef34b8e55a476b82fbd9a6367e1&language=en-US&query=${enterSearch}&page=1&include_adult=false`); */

    /* useEffect(() => {
        setFilteredResults(r)
    }, [filterText, results]) */

    return (
        <div className="search-results">
            <Filter filter={filter} onFilterChange={(option) => setFilter(option)}/>
            <FilterResultsList filter={filter}/>
               {/*  <ul className="results">
                    {data && data.results.map((r, i) => <li key={i}>{r.title || r.name}</li>)}
                </ul>  */}
        </div>
    );
};

export default FilterResults
