import { useEffect, useState } from 'react';
import React from 'react'
import SearchResultsList from './SearchResultsList';
import SearchBar  from './SearchBar';
import useFetch from '../../hooks/useFetch';

const SearchResults = () => {
    const [searchText, setSearchText] = useState('');
    /* const [filteredResults, setFilteredResults] = useState(''); */
    const [enterSearch, setEnterSearch] = useState('');
    const [data] = useFetch(`https://api.themoviedb.org/3/search/multi?api_key=2f5b9ef34b8e55a476b82fbd9a6367e1&language=en-US&query=${enterSearch}&page=1&include_adult=false`);


    /* useEffect(() => {
        setFilteredResults(r)
    }, [filterText, results]) */

    return (
        <div className="search-results">
            <SearchBar searchText={searchText} onSearchTextChange={(text) => setSearchText(text)} onEnterPressed={(search) => setEnterSearch(search)}/>
            <SearchResultsList>
                <p>{data && `${data.total_results} Results`}</p>
                <ul className="results">
                    {data && data.results.map((r, i) => <li key={i}>{r.title || r.name}</li>)}
                </ul>
            </SearchResultsList>
        </div>
    );
};

export default SearchResults
