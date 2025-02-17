import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function SearchResults() {
  const { query } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const API_KEY = "bef053e54467bb6e45c979baff9072d7";
      const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    if (query) fetchMovies();
  }, [query]);

  return (
    <div className="searchResults">
      <h1>Search Results for: {query}</h1>
      <div className="movieContainer">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id} className="movieHolder">
              <Link to={`/movie/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w200/${movie.backdrop_path}`}
                  alt={movie.title}
                />
                <h3>{movie.title}</h3>
              </Link>
            </div>
          ))
        ) : (
          <p>No movies found for "{query}".</p>
        )}
      </div>
    </div>
  );
}
