import { createContext, useEffect, useState, useContext } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  // 1. Lazy Initialization: Check localStorage BEFORE setting the initial state
  const [favourites, setFavourites] = useState(() => {
    const storedFavs = localStorage.getItem("Favourites");
    return storedFavs ? JSON.parse(storedFavs) : [];
  });

  // 2. We only need ONE useEffect now! It simply updates localStorage whenever favourites changes.
  useEffect(() => {
    localStorage.setItem("Favourites", JSON.stringify(favourites));
  }, [favourites]);

  const addToFavourites = (movie) => {
    setFavourites((prev) => [...prev, movie]);
  };

  const removeFromFavourites = (movieID) => {
    setFavourites((prev) => prev.filter((movie) => movie.id !== movieID));
  };

  const isFavourite = (movieID) => {
    return favourites.some((movie) => movie.id === movieID);
  };

  const values = {
    favourites,
    addToFavourites,
    removeFromFavourites,
    isFavourite,
  };

  return (
    <MovieContext.Provider value={values}>{children}</MovieContext.Provider>
  );
};
