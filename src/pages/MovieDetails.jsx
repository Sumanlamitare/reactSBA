import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "../App.css";

export default function MovieDetails() {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState(null);

  async function getMovieDetails() {
    const API_KEY = "bef053e54467bb6e45c979baff9072d7";
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setMovieDetail(data);
  }

  useEffect(() => {
    getMovieDetails();
  }, [id]);
  if (!movieDetail) {
    return <div>Loading...</div>;
  }
  return (
    <div className="movieDetail">
      <div className="poster">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`}
          alt={movieDetail.title}
        />
      </div>
      <div className="details">
        <h1>{movieDetail.title}</h1>
        <p>
          <strong>Release Date: </strong> {movieDetail.release_date}
        </p>
        <p>
          <strong>Status: </strong> {movieDetail.status}
        </p>
        <p>
          <strong>Genres: </strong>{" "}
          {movieDetail.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p>
          <strong>Rating: </strong> {movieDetail.vote_average}
        </p>
        <p>
          <strong>Overview: </strong> {movieDetail.overview}
        </p>
        <p>
          <strong>Homepage: </strong>
          <a href={movieDetail.homepage} target="_blank">
            {movieDetail.homepage}
          </a>
        </p>
        <p>
          <strong>Budget: </strong>{" "}
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(movieDetail.budget)}
        </p>
        <p>
          <strong>Revenue: </strong>{" "}
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(movieDetail.revenue)}
        </p>
        <p>
          <strong>Languages Spoken: </strong>{" "}
          {movieDetail.spoken_languages
            .map((languages) => languages.english_name)
            .join(", ")}
        </p>
        <p>
          <strong>Runtime: </strong> {movieDetail.runtime}
        </p>
        <p>
          <strong>Origin Country: </strong>
          {movieDetail.origin_country + " "}
        </p>
      </div>
    </div>
  );
}
