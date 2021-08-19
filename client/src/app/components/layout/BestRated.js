import React from 'react';
import useFetch from '../../hooks/useFetch';
import { Loading, Error } from '../handling';



const API_URL_MOVIES = 'https://api.themoviedb.org/3/movie/top_rated?api_key=2f5b9ef34b8e55a476b82fbd9a6367e1'
const API_URL_SERIES = 'https://api.themoviedb.org/3/tv/top_rated?api_key=2f5b9ef34b8e55a476b82fbd9a6367e1'

const BestRated = ({filter}) => {
    const [movies, moviesLoading, moviesError] = useFetch(API_URL_MOVIES);
    const [series, seriesLoading, seriesError] = useFetch(API_URL_SERIES);

    return (
        <div>
            <h2>Best Rated</h2>
            <h3>Movies</h3>
            {
                moviesError ? <Error>{moviesError}</Error> :
                moviesLoading || !movies ? 
                    <Loading/> :
                    <ul>{movies.results.map((d, i) => filter ? (d.genre_ids.includes(parseInt(filter)) && <li key={d.id}>{d.title || d.name}</li>) : <li key={d.id}>{d.title || d.name}</li>)}</ul>
            }
            <h3>Series</h3>
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
