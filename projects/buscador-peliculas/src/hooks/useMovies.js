import { useState } from "react";
import withResults from "../mocks/with-result.json";
import noResult from "../mocks/no-result.json";

export function useMovies( { search }) {
  
  const [responseMovies, setResponseMovies] = useState([]);
  
  const movies = responseMovies.Search;
  

  const mappedMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
  }));

  const getMovies = () => {
    if (search) {
      //setResponseMovies(withResults);
      fetch(`http://www.omdbapi.com/?apikey=6d6fb144&s=${search}`)
        .then(res => res.json())
        .then(json => {
          setResponseMovies(json);
        })
    }else {
      setResponseMovies(noResult);
    }
  }

  return { movies: mappedMovies, getMovies};
}
