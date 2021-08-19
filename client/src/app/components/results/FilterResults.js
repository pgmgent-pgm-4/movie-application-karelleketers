import { useEffect, useState } from 'react';
import React from 'react'
import FilterResultsList from './FilterResultsList';
import Filter from './Filter'

const FilterResults = () => {
    const [filter, setFilter] = useState('');

    return (
        <div className="search-results">
            <Filter filter={filter} onFilterChange={(option) => setFilter(option)}/>
            <FilterResultsList filter={filter}/>
        </div>
    );
};

export default FilterResults
