import React from 'react';
import useFetch from '../../hooks/useFetch';
import { Loading, Error } from '../handling';


const API_URL = 'https://api.themoviedb.org/3/movie/upcoming?api_key=2f5b9ef34b8e55a476b82fbd9a6367e1'


const Upcoming = () => {
    const [data, isLoading, error] = useFetch(API_URL);
    return (
        <div>
            <h2>Upcoming</h2>
            { error ? <Error>{error}</Error> : 
            isLoading || !data ? 
            <Loading/> :
            <ul>{data.results.map((d, i) => <li key={d.id}>{d.title || d.name}</li>)}</ul>
            }
        </div>
    )
}


export default Upcoming
