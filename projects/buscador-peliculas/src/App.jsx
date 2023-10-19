import { Movies } from "./Components/Movies";
import { useMovies } from "./hooks/useMovies";
import { useSearch } from "./hooks/useSearch";
import debounce from "just-debounce-it";
import { useCallback, useState } from "react";

import "./App.css";

function App() {
  
  const [sort, setSort] = useState(false);

  const { search, updateSearch, error } = useSearch();
  const { movies, getMovies, loading } = useMovies({ search, sort });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceGetMovies = useCallback(
    debounce(search => {
      getMovies({ search });
    }, 300),
    [getMovies]
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies({ search });
  };

  const handleChange = (event) => {
    const newSearch = event.target.value;
    updateSearch(newSearch);
    debounceGetMovies({ newSearch });
  };

  const handleSort = () => {
    setSort(!sort);
  };

  return (
    <div className="page">
      <header>
        <h1>Buscador de películas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            value={search}
            name="query"
            type="text"
            placeholder="Avengers, Star Wars, Saw, The Matrix..."
          />

          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type="submit">Buscar</button>
        </form>

        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>

      <main>{loading ? <p>Cargando... </p> : <Movies movies={movies} />}</main>
    </div>
  );
}

export default App;
