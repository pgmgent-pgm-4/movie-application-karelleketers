import React from 'react';
import useFetch from '../../hooks/useFetch';
import { Loading, Error } from '../handling';
import { Link } from 'react-router-dom';
import * as Routes from '../../routes';



const API_URL = 'https://api.themoviedb.org/3/trending/all/day?api_key=2f5b9ef34b8e55a476b82fbd9a6367e1'


const Trending = () => {
    const [data, isLoading, error] = useFetch(API_URL);
    return (
        <div>
            <h2>Trending</h2>
            { error ? <Error>{error}</Error> : 
            isLoading || !data ? 
            <Loading/> :
            <ul>{data.results.map((d, i) =><Link to={Routes.PROJECT_DETAILS}><li key={d.id}>{d.title || d.name}</li></Link>)}</ul>
            }
        </div>
    )
}

export default Trending


{/* <ul>{data.results.map((d, i) => <li key={`trending-${i}`}>{d.original_title}</li>)}</ul> */}
