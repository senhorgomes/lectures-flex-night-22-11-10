import { useState, useEffect } from "react";
import axios from 'axios';
const useApiFetcher = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    //We need to fetch information from the api using axios
    ////When do we want this fetch to happen? Once? Multiple times?
    ////Once, during the initial render, with a useEffect
    useEffect(()=>{
        axios.get(url)
        .then((response)=>{
            //return that information from the fetch, set it to state
            console.log(response.data)
            setData(response.data);
        })
        .catch((err)=>{
            setError(err)
        })
    }, [url])

    return [data, error];
}

export default useApiFetcher