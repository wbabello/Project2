import logo from "./logo.svg";
import "./App.css";
import MovieList from "./MoviesList";
import AddToFavourites from "./AddToFavourites";
import React, { useState, useEffect } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
  };

  return (
    <div className="Container ">
      <h1> Top Movies </h1>
      <MovieList></MovieList>
      <div className="row">
        <MovieList
          movies={movies}
          handleFavouritesClick={addFavouriteMovie}
          favouriteComponent={AddToFavourites}
        />
      </div>
      <div className="container-fluid movie-app">
        <div className="row d-flex align-items-center mt-4 mb-4"></div>
        <div className="row">
          <MovieList
            movies={movies}
            handleAddFavouritesClick={addFavouriteMovie}
            favouriteComponent={AddToFavourites}
          />
        </div>
        {/* <div className="row d-flex align-items-center mt-4 mb-4">
          <MovieListHeading heading="Favourites" />
        </div> */}
        <div className="row">
          <MovieList
            movies={favourites}
            // handleFavouritesClick={removeFavouriteMovie}
            // favouriteComponent={RemoveFavourites}
          />
        </div>
      </div>
      );
    </div>
  );
}

export default App;
