import React from 'react';
import useFetch from '../../hooks/useFetch';
import { Loading, Error } from '../handling';


const API_URL_trending = 'https://api.themoviedb.org/3/trending/all/day?api_key=2f5b9ef34b8e55a476b82fbd9a6367e1'
const API_URL_videos = 'https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=2f5b9ef34b8e55a476b82fbd9a6367e1&language=en-US'

const Trailers = () => {
    const [data, isLoading, error] = useFetch(API_URL_trending);
   /*  const GetVideos = () => {
        const [videos, videosLoading, videosError] = useFetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=2f5b9ef34b8e55a476b82fbd9a6367e1&language=en-US`)
    }
 */
    return (
        <div>
            <h2>Trailers</h2>
            { error ? <Error>{error}</Error> : 
            isLoading || !data ? 
            <Loading/> :
            <ul>{data.results.map((d, i) => <li key={d.id}>{
                d.id
                }</li>)}</ul>
            }
        </div>
    )
}

export default Trailers
