import React from 'react';
import { Popular, Upcoming, BestRated } from '../layout';

const FilterResultsList = ({filter}) => {
    return (
        <div>
            <Popular filter={filter}/>
            <Upcoming filter={filter}/>
            <BestRated filter={filter}/>
        </div>
    )
}

export default FilterResultsList