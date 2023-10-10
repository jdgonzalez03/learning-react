// eslint-disable-next-line react/prop-types
export function ListOfMovies({ movies }) {
  return (
    <ul>
      {/*eslint-disable-next-line react/prop-types*/}
      {movies.map((movie) => (
        <li key={movie.imdbID}>
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
          <img src={movie.Poster} alt={movie.Title} />
        </li>
      ))}
    </ul>
  );
}

export function NoMoviesResults() {
  return <p>No se encontraron peliculas</p>;
}

// eslint-disable-next-line react/prop-types
export function Movies ({ movies }){
  // eslint-disable-next-line react/prop-types
  const hasMovies = movies?.length > 0;

  return (
    hasMovies ? <ListOfMovies movies={movies}/> : <NoMoviesResults/>
  )
}