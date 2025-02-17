import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Search from "../components/Search";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);

  // Fetch trending movies of the week
  async function getTopMovies() {
    const API_KEY = "bef053e54467bb6e45c979baff9072d7";
    const weekly_url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;

    try {
      const response = await fetch(weekly_url);
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  }

  // Fetch top-rated movies of all time
  async function getAllTimeMovies() {
    const API_KEY = "bef053e54467bb6e45c979baff9072d7";
    const allTime_url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;

    try {
      const response = await fetch(allTime_url);
      const data = await response.json();
      setTopMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getTopMovies();
    getAllTimeMovies();
  }, []);

  return (
    <>
      <Search></Search>
      <h1 className="label">Top Movies of the Week</h1>

      <div className="movieContainer">
        {movies.map((movie) => (
          <Link
            key={movie.id}
            to={`/movie/${movie.id}`}
            className="movieHolder"
            style={{ textDecoration: "none" }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w200/${movie.backdrop_path}`}
              alt={movie.title}
            />
            <h4 style={{ marginTop: "3em" }}>{movie.title}</h4>
          </Link>
        ))}
      </div>

      <br />
      <br />

      <h1 className="label">Highest Rated Movies Of All Time</h1>
      <div className="movieContainer">
        {topMovies.map((movie) => (
          <Link
            key={movie.id}
            to={`/movie/${movie.id}`}
            className="movieHolder"
            style={{ textDecoration: "none" }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w200/${movie.backdrop_path}`}
              alt={movie.title}
            />
            <h4 style={{ marginTop: "3em" }}>{movie.title}</h4>
          </Link>
        ))}
      </div>
    </>
  );
}
