const API_KEY = "0e6f4585d23b2854f92ca8fd6aa48903"; // Keep your real API key here
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async (page = 1) => {
  const response = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`,
  );
  const data = await response.json();
  // Return both the movies and the total page count
  return { results: data.results, totalPages: data.total_pages };
};

export const searchMovies = async (query, page = 1) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query,
    )}&language=en-US&page=${page}`,
  );
  const data = await response.json();
  return { results: data.results, totalPages: data.total_pages };
};
export const getGenres = async () => {
  const response = await fetch(
    `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`,
  );
  const data = await response.json();
  return data.genres;
};

export const discoverMoviesByGenre = async (genreId, page = 1) => {
  const response = await fetch(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&page=${page}&with_genres=${genreId}`,
  );
  const data = await response.json();
  return { results: data.results, totalPages: data.total_pages };
};
