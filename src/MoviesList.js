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
      <h2> </h2>
      <ul>
        {movieList.map((movieItem) => (
          <div className="movieList-Container" key={`Movie ${movieList.name}`}>
            <div>
              <img
                src={movieItem.bannerUrl}
                className="img-thumbnail "
                alt="Cinque Terre"
              ></img>

              <div
                className="AddToFavourite-button btn btn-outline-dark"
                onClick={() => props.handleFavouritesClick(movieItem)}
              >
                Add to Favourites
              </div>
            </div>
            <div
              className="movieList-details col-sm-12 col-md-6 "
              key={`Movie ${movieList.name}`}
            >
              {movieItem.name} <br /> {`Released On: ${movieItem.releasedOn}`}
              <br />
              {/* {`Movie Watched: ${movieItem.watched.boolValue ? "Yes" : "No"}`} //not rendering Movie watched at this time */}
            </div>
          </div>
        ))}
      </ul>
    </>
  );
}

export default MovieList;
