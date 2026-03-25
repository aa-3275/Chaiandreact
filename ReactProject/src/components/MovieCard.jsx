import React, { useState } from "react";
import "../CSS/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";

function MovieCard({ movie }) {
  const { addToFavourites, removeFromFavourites, isFavourite } =
    useMovieContext();
  const favourite = isFavourite(movie.id);

  // State to track if the image has finished downloading
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  function onFavouriteClick(e) {
    e.preventDefault();
    if (favourite) removeFromFavourites(movie.id);
    else addToFavourites(movie);
  }

  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Poster";

  return (
    <div className="movie-card">
      <div className="movie-poster">
        {/* Skeleton placeholder shows while image is loading */}
        {!isImageLoaded && <div className="image-skeleton"></div>}

        <img
          src={imageUrl}
          alt={movie.title}
          loading="lazy" /* Native browser lazy loading */
          onLoad={() =>
            setIsImageLoaded(true)
          } /* Triggers when download completes */
          className={`poster-image ${isImageLoaded ? "loaded" : ""}`}
        />

        <div className="movie-overlay">
          <div className="overlay-header">
            <button
              className={`favourite-btn ${favourite ? "active" : ""}`}
              onClick={onFavouriteClick}
            >
              ♥
            </button>
          </div>
          <div className="overlay-description">
            <p>
              {movie.overview
                ? movie.overview.slice(0, 120) + "..."
                : "No synopsis available."}
            </p>
          </div>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <div className="movie-meta">
          <p>{movie.release_date?.split("-")[0]}</p>
          <p className="movie-rating">
            ⭐ {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
