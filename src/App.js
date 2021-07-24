import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./MoviesList";
import AddToFavourites from "./AddToFavourites";
import React, { useState, useEffect } from "react";
import FavouritesList from "./FavouritesList";
import RemoveFavourites from "./RemoveFavourites";

function App() {
  // const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
  };

  const removeFavouriteMovie = (movie) => {
    // movie.watched = true;
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.id !== movie.id
    );

    setFavourites(newFavouriteList);
  };

  return (
    <div class="headerContainer">
      <h1 class="display-4">Movie Generator 9000</h1>
      <p class="lead">powered by Moviemagic 2124©</p>
      <hr class="my-4"></hr>
      <div className="Container ">
        <div className="topTitle">
          <h1> Top Movies </h1>
        </div>
        <div className="container-fluid movie-app">
          <div className="row">
            <MovieList handleFavouritesClick={addFavouriteMovie} />
            {/* <FavouritesList displayFavouriteList={favourites}></FavouritesList> */}
          </div>
          {
            <div className="row">
              {/* <MovieList handleFavouritesClick={addFavouriteMovie} /> */}
              <FavouritesList
                displayFavouriteList={favourites}
                handleFavouritesClick={removeFavouriteMovie}
              ></FavouritesList>
            </div>
          }
        </div>
        {/* //{" "} */}
      </div>
    </div>
  );
}

export default App;
