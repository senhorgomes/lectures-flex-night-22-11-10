// import { useState, useEffect } from "react";

import useApiFetcher from "../hooks/useApiFetcher";

// import axios from 'axios';
const StarWarsSearch = () => {
    const [data, error] = useApiFetcher('https://swapi.dev/api/people/3');
    // const [listOfMovies, setListOfMovies] = useState([]);
    // //We need to fetch information from the api using axios
    // ////When do we want this fetch to happen? Once? Multiple times?
    // ////Once, during the initial render, with a useEffect
    // useEffect(()=>{
    //     axios.get('https://ghibliapi.herokuapp.com/films/')
    //     .then((response)=>{
    //         //return that information from the fetch, set it to state
    //         setListOfMovies(response.data);
    //     })
    // }, [])
    //Have it displayed in the form of a <ul>
                            // data in place of listOfMovies
    return (
        <div>
            {!error && 
            <div>
                <h2>Here is information about {data.name}</h2>
                <h2>They were born on {data.birth_year}</h2>
            </div>}
            {error && <h2>Sorry something happened!</h2>}
        </div>
    );
}

export default StarWarsSearch;