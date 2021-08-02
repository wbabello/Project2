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
  const [favourites, setFavourites] = useState([]);

  const addFavouriteMovie = (movie) => {
    const selectedMovieIndex = favourites.findIndex(
      (favourite) => favourite.id === movie.id
    );

    if (selectedMovieIndex === -1) {
      const newFavouriteList = [...favourites, movie];

      setFavourites(newFavouriteList);
    } else {
      alert("The movies has been added");
    }

    // check old favourite list to see a matching movie when a new movie is AudioDestinationNode.
    // if a matching movie exist display a message otherwise add se;lected movie to newFavouriteList)
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.id !== movie.id
    );
    setFavourites(newFavouriteList);
  };

  const markFavouriteMovieAsWatched = (movie) => {
    const newFavouriteList = favourites.map((favourite) => {
      if (favourite.id === movie.id) {
        favourite.isWatched = !favourite.isWatched; // toggle it as watched
        return favourite; // return the movie back into the array
      }

      return favourite;
    });
    setFavourites(newFavouriteList);
  };

  const removeAllFavouriteMovie = () => {
    setFavourites([]); // re-set my favourites list to empty as all favourites
  };

  return (
    <>
      {
        <div class="headerContainer bg-secondary text-white height: 100%">
          <h1 class="display-4">Watch Later SPA — Movie Generator 9000</h1>
          <p class="lead">powered by Moviemagic 2124©</p>
          <hr class="my-4"></hr>
        </div>
      }

      <div className="container-1 p-3 mb-2 bg-dark text-white border-top">
        <h1 className="topTitle"> Top 100 Favourite Movies </h1>
        <div class="col-sm-12 col-md-6">
          <p class="lead">
            Insiders were asked to pick their favorite movies of all time,
            providing us with details of favourte movies watched{" "}
          </p>
        </div>
        <div className="container-2">
          <div className="row">
            <MovieList handleFavouritesClick={addFavouriteMovie} />
          </div>
          {
            <div className="row">
              <FavouritesList
                displayFavouriteList={favourites}
                handleFavouritesClick={removeFavouriteMovie}
                handleMarkFavouriteMovieAsWatched={markFavouriteMovieAsWatched}
                handleRemoveAllFavouriteMovie={removeAllFavouriteMovie}
              ></FavouritesList>
            </div>
          }
        </div>
      </div>
    </>
  );
}

export default App;
