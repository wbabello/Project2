import logo from "./logo.svg";
import "./App.css";
import MovieList from "./MoviesList";
import AddToFavourites from "./AddToFavourites";
import React, { useState, useEffect } from "react";
import FavouritesList from "./FavouritesList";

function App() {
  // const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
  };

  return (
    <div className="Container ">
      <h1> Top Movies </h1>
      <div className="row">
        <MovieList handleFavouritesClick={addFavouriteMovie} />
        <FavouritesList displayFavouriteList={favourites}></FavouritesList>
      </div>
      );
    </div>
  );
}

export default App;
