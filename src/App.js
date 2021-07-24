import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./MoviesList";
import AddToFavourites from "./AddToFavourites";
import React, { useState, useEffect } from "react";
import FavouritesList from "./FavouritesList";
import RemoveFavourites from "./RemoveFavourites";
import { Button } from "bootstrap";

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

  const markFavouriteMovieAsWatched = (movie) => {
    const newFavouriteList = favourites.map((favourite) => {
      if (favourite.id === movie.id) {
        // find the watched movie
        favourite.isWatched = !favourite.isWatched; // toggle it as watched

        return favourite; // return the movie back into the array
      }

      return favourite;
    });
    setFavourites(newFavouriteList);

    // new list of movie selected in my favourites
    // when user click on 'Is Movie watched ' Button
    // The button should change from Node(default) to Yes
  };

  const removeAllFavouriteMovie = () => {
    setFavourites([]); // re-set favourites list to empty
  };

  return (
    <>
      <div class="headerContainer">
        <h1 class="display-4">Movie Generator 9000</h1>
        <p class="lead">powered by Moviemagic 2124©</p>
        <hr class="my-4"></hr>
      </div>

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
                handleMarkFavouriteMovieAsWatched={markFavouriteMovieAsWatched}
                handleRemoveAllFavouriteMovie={removeAllFavouriteMovie}
              ></FavouritesList>
            </div>
          }
        </div>
        {/* //{" "} */}
      </div>
    </>
  );
}

export default App;
