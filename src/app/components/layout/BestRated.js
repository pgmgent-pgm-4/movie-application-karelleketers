import React from 'react';
import useFetch from '../../hooks/useFetch';
import { Loading, Error } from '../handling';



const API_URL_MOVIES = 'https://api.themoviedb.org/3/movie/top_rated?api_key=2f5b9ef34b8e55a476b82fbd9a6367e1'
const API_URL_SERIES = 'https://api.themoviedb.org/3/tv/top_rated?api_key=2f5b9ef34b8e55a476b82fbd9a6367e1'

const BestRated = () => {
    const [movies, moviesLoading, moviesError] = useFetch(API_URL_MOVIES);
    const [series, seriesLoading, seriesError] = useFetch(API_URL_SERIES);

    return (
        <div>
            <h2>Best Rated</h2>
            {
                moviesError ? <Error>{moviesError}</Error> :
                moviesLoading || !movies ? 
                    <Loading/> :
                    <ul>{movies.results.map((d, i) => <li key={d.id}>{d.title || d.name}</li>)}</ul>
            }
            {
                seriesError ? <Error>{seriesError}</Error> :
                seriesLoading || !series ? 
                    <Loading/> :
                    <ul>{series.results.map((d, i) => <li key={d.id}>{d.title || d.name}</li>)}</ul>
            }
        </div>
    )
}

export default BestRated
