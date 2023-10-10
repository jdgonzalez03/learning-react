import responseMovies from "./mocks/with-result.json";
//import noResult from "./mocks/no-result.json";
import { Movies } from "./Components/Movies";

import "./App.css";

function App() {
  const movies = responseMovies.Search;

  return (
    <div className="page">
      <header>
        <h1>Buscador de peliculas</h1>
        <form className="form">
          <input
            type="text"
            placeholder="Avengers, Star Wars, Saw, The Matrix..."
          />
          <button type="submit">Buscar</button>
        </form>
      </header>

      <main>
        <Movies movies={movies}/>
      </main>
    </div>
  );
}

export default App;
