import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import {
  searchMovies,
  getPopularMovies,
  getGenres,
  discoverMoviesByGenre,
} from "../services/api";
import "../CSS/Home.css";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [lastSearch, setLastSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [activeIndex, setActiveIndex] = useState(0);

  // New states for Genres
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");

  // Fetch the list of genres only ONCE when the app loads
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const genreList = await getGenres();
        setGenres(genreList);
      } catch (err) {
        console.error("Failed to fetch genres");
      }
    };
    fetchGenres();
  }, []);

  const loadMovies = async (pageNumber, query, genreId) => {
    setLoading(true);
    try {
      let data;
      if (query) {
        data = await searchMovies(query, pageNumber);
      } else if (genreId) {
        data = await discoverMoviesByGenre(genreId, pageNumber);
      } else {
        data = await getPopularMovies(pageNumber);
      }
      setMovies(data.results);
      setTotalPages(data.totalPages);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to load movies...");
    } finally {
      setLoading(false);
    }
  };

  // Listen for changes to page, lastSearch, OR selectedGenre
  useEffect(() => {
    loadMovies(page, lastSearch, selectedGenre);
  }, [page, lastSearch, selectedGenre]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    setPage(1);
    setSelectedGenre(""); // Clear genre when searching
    setLastSearch(searchQuery);
  };

  const handleGenreChange = (e) => {
    setPage(1);
    setSearchQuery(""); // Clear search box
    setLastSearch(""); // Clear active search
    setSelectedGenre(e.target.value); // Set the new genre
  };

  const top10Movies = movies.length > 0 ? movies.slice(0, 10) : [];

  return (
    <div className="home">
      {/* ACCORDION HERO BANNER */}
      {!loading && !lastSearch && !selectedGenre && top10Movies.length > 0 && (
        <div className="hero-accordion">
          {top10Movies.map((movie, index) => (
            <div
              key={movie.id}
              className={`accordion-panel ${index === activeIndex ? "active" : ""}`}
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
              }}
              onMouseEnter={() => setActiveIndex(index)}
            >
              {index === activeIndex && (
                <div className="accordion-content">
                  <h2>{movie.title}</h2>
                  <p>
                    {movie.overview.length > 150
                      ? movie.overview.slice(0, 150) + "..."
                      : movie.overview}
                  </p>
                  <button className="play-btn">▶ Play</button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="home-content">
        {/* Updated Search & Filter Bar */}
        <div className="controls-container">
          <form onSubmit={handleSearch} className="search-form">
            <input
              type="text"
              placeholder="Search for movies..."
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">
              Search
            </button>
          </form>

          {/* New Genre Dropdown */}
          <select
            className="genre-select"
            value={selectedGenre}
            onChange={handleGenreChange}
          >
            <option value="">All Genres</option>
            {genres.map((genre) => (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            ))}
          </select>
        </div>

        {error && <div className="error-message">{error}</div>}

        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <>
            <div className="movies-grid">
              {movies.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="pagination">
                <button
                  className="page-btn"
                  onClick={() => setPage((prev) => prev - 1)}
                  disabled={page === 1}
                >
                  Previous
                </button>
                <span className="page-info">
                  Page {page} of {totalPages}
                </span>
                <button
                  className="page-btn"
                  onClick={() => setPage((prev) => prev + 1)}
                  disabled={page === totalPages}
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
