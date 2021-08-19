import axios from 'axios';
import { useState, useEffect } from 'react';


const useFetch = (api) => {
    const [data, setData] = useState('')
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null)

    useEffect(() => {
        const getData = async () => {
            try {
                    const response = await axios.get(api);
                    setData(response.data)
            } catch(error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        }

        getData()
    }, [api])

    return [data, isLoading, error]
}




export default useFetch
