import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";

function MovieList(props) {
  const [movieList, setMovieList] = useState([]);
  const [movies, setMovies] = useState([]);

  const getMovieList = async () => {
    const response = await axios.get("https://hub.dummyapis.com/vj/wzGUkpZ");
    setMovieList(response.data);
  };

  useEffect(() => {
    getMovieList();
  }, []);

  return (
    <>
      <h2>Top Recommendation </h2>
      <ul>
        {movieList.map((movieItem) => (
          <div className="movieList-Container" key={`Movie ${movieList.name}`}>
            <img
              src={movieItem.bannerUrl}
              className="Movie-logo"
              alt="movie"
            ></img>

            {/* <div className="overlay d-flex align-items-center justify-content-center"></div> */}

            <div
              className="Favourite-button"
              onClick={() => props.handleFavouritesClick(movieItem)}
            >
              Add to Favourites
            </div>

            <div className="movieList-details" key={`Movie ${movieList.name}`}>
              {movieItem.name}, {`Released On ${movieItem.releasedOn}`},
              {`Movie Watched: ${
                movieItem.watched.boolValue ? "true" : "false"
              }`}
            </div>
          </div>
        ))}
      </ul>
    </>
  );
}

export default MovieList;
