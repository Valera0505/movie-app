import React, {useEffect, useState} from "react";
import './App.css';
import MovieBox from "./MovieBox";

function App() {
  const [movies, setMovies]=useState([]);
  const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=15c0395faab321ba84a13913286e91ef";

  useEffect(()=>{
    fetch(API_URL)
        .then((res)=>res.json())
        .then(data=>{
          console.log(data);
          setMovies(data.results);
        })
  }, [])
  return (
    <div >
        {movies.map((movieReq)=><MovieBox/>)}
    </div>
  );
}

export default App;
