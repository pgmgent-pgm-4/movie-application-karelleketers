import React from 'react';
import useFetch from '../../hooks/useFetch';
import { Loading, Error } from '../handling';
import { Link } from 'react-router-dom';
import * as Routes from '../../routes';


const API_URL_trending = 'https://api.themoviedb.org/3/trending/all/day?api_key=2f5b9ef34b8e55a476b82fbd9a6367e1'
const API_URL_videos = 'https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=2f5b9ef34b8e55a476b82fbd9a6367e1&language=en-US'

const Trailers = () => {
    const [data, isLoading, error] = useFetch(API_URL_trending);
    let idList = [];
    if (!!data) {idList = data.results.map(d => d.id)};
    console.log(idList);
    /* idList.map(v => ) */
    /* const GetVideos = () => {
        const [videos, videosLoading, videosError] = useFetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=2f5b9ef34b8e55a476b82fbd9a6367e1&language=en-US`)
    } */
    /* const [videos, videosLoading, videosError] = useFetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=2f5b9ef34b8e55a476b82fbd9a6367e1&language=en-US`) */

    return (
        <div>
            <h2>Trailers</h2>
            { error ? <Error>{error}</Error> : 
            isLoading || !data ? 
            <Loading/> :
            <ul>{data.results.map((d, i) => <Link to={Routes.PROJECT_DETAILS}><li key={d.id}>{
                d.id
                }</li></Link>)}</ul>
            }
        </div>
    )
}

export default Trailers
