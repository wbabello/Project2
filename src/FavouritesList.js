import React from "react";

const FavouritesList = (props) => {
  return (
    <>
      <h2> Favourite List </h2>
      <ul>
        {props.displayFavouriteList.map((movieItem) => (
          <div className="movieList-Container" key={`Movie ${movieItem.name}`}>
            <img
              src={movieItem.bannerUrl}
              className="Movie-logo"
              alt="movie"
            ></img>

            <div className="movieList-details" key={`Movie ${movieItem.name}`}>
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
};

export default FavouritesList;
