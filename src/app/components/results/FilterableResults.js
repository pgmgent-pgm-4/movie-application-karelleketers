import { useEffect, useState } from 'react';
import React from 'react'
import ResultsList  from './ResultsList';
import SearchBar  from './SearchBar';
import useFetch from '../../hooks/useFetch';
import { Loading, Error } from '../handling';

const FilterableResults = () => {
    const [filterText, setFilterText] = useState('');
    /* const [filteredResults, setFilteredResults] = useState(''); */
    const [enterSearch, setEnterSearch] = useState('');

    console.log(enterSearch);

    const [data] = useFetch(`https://api.themoviedb.org/3/search/multi?api_key=2f5b9ef34b8e55a476b82fbd9a6367e1&language=en-US&query=${enterSearch}&page=1&include_adult=false`);

    /* if (data) {console.log(data.results[0].title)}; */

    /* useEffect(() => {
        setFilteredResults(r)
    }, [filterText, results]) */

    

    return (
        <div className="filterable-results">
            <SearchBar filterText={filterText} onFilterTextChange={(text) => setFilterText(text)} onEnterPressed={(search) => setEnterSearch(search)}/>
            <ResultsList>
                <p>{data && `${data.total_results} Results`}</p>
                <ul className="results">
                    {data && data.results.map((r, i) => <li key={i}>{r.title || r.name}</li>)}
                </ul>
            </ResultsList>
        </div>
    );
};

export default FilterableResults
