import "../CSS/Favourites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

export default function Favourites() {
  // Get the favourites array from our Context
  const { favourites } = useMovieContext();

  // If there are movies in the favourites array, render the grid
  if (favourites && favourites.length > 0) {
    return (
      <div className="favourites">
        <h2>Your Favourites</h2>
        <div className="movies-grid">
          {favourites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }

  // If the array is empty, render this empty state
  return (
    <div className="favourites-empty">
      <h2>No Favourite Movies Yet</h2>
      <p>Click on the heart icon to add movies to your favourites list.</p>
    </div>
  );
}
