import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { BaseLayout } from '../layouts';
import useFetch from "../hooks/useFetch";
import { Loading, Error } from "../components/handling";
import { ThemeProvider } from "../context";


const API_URL = 'https://api.themoviedb.org/3/{data.media_type}/{data.id}?api_key=2f5b9ef34b8e55a476b82fbd9a6367e1&language=en-US'
const API_URL_TEMP = 'https://api.themoviedb.org/3/tv/91363?api_key=2f5b9ef34b8e55a476b82fbd9a6367e1&language=en-US';
const API_URL_CREDIT= 'https://api.themoviedb.org/3/tv/91363/credits?api_key=2f5b9ef34b8e55a476b82fbd9a6367e1&language=en-US';
const API_URL_TAGS = 'https://api.themoviedb.org/3/tv/91363/keywords?api_key=2f5b9ef34b8e55a476b82fbd9a6367e1';
const ProjectPage = () => {
  const { id } = useParams();
  const [ project, setProject ] = useState();

  const [data, isLoading, error] = useFetch(API_URL_TEMP);
  const [credits, creditsLoading, creditsError] = useFetch(API_URL_CREDIT);
  const [tags, tagsLoading, tagsError] = useFetch(API_URL_TAGS);
    return (
        <ThemeProvider>
            <BaseLayout>
                {/* {!!project && <ProjectDetails project={project} /> }
                {!!project && <ProjectReviewList projectId={project.uid} /> } */}
                <h2>PRODUCT DETAIL</h2>
                { error ? <Error>{error}</Error> : 
                isLoading || !data ? 
                <Loading/> :
                <div>
                    <h3>TITLE: {data.name || data.title}</h3>
                    <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${data.poster_path}`} alt="" />
                    <p>VOTE:{data.vote_average}</p>
                    <p>LANGUAGE: {data.original_language}</p>
                    <p>SEASONS:{data.number_of_seasons}</p>
                    <p>EPISODES:{data.number_of_episodes}</p>
                    { creditsError ? <Error>{creditsError}</Error> : 
                        creditsLoading || !credits ? 
                        <Loading/> :
                        <ul>CAST:{credits.cast.map((d, i) => <li key={d.id}><p>{d.name}</p><img src={d.profile_path && `https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${d.profile_path}`} alt=""/></li>)}</ul>
                        }
                    <p>OVERVIEW:{data.overview}</p>
                    <p>POPULARITY:{data.popularity}</p>
                    <a href={data.homepage}>Link to the Website</a>
                    { tagsError ? <Error>{tagsError}</Error> : 
                        tagsLoading || !tags ? 
                        <Loading/> :
                        <ul>Tags:{tags.results.map((d, i) => <li key={d.id}>{d.name}</li>)}</ul>
                        }
                </div>
                }
            </BaseLayout>
        </ThemeProvider>
        
    )
};

export default ProjectPage