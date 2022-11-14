// import { useState, useEffect } from "react";

import useApiFetcher from "../hooks/useApiFetcher";

// import axios from 'axios';
const GhibliDatabase = () => {
    const [data] = useApiFetcher('https://ghibliapi.herokuapp.com/films/');
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
    const htmlListOfMovies = data.map((element)=>{
        return(
            <li>
                {element.title}
            </li>
        )
    })
    return (
        <div>
            <h2>Welcome to our Studio Ghibli Database</h2>
            <h2>Here are a list of movies</h2>
            <ul>
                {htmlListOfMovies}
            </ul>
        </div>
    );
}

export default GhibliDatabase;