import React from "react";

const FavouritesList = (props) => {
  console.log("props +++", props);
  return (
    <>
      <h2> Favourite List </h2>

      <div
        className="Favourite-button"
        onClick={() => props.handleRemoveAllFavouriteMovie()}
      >
        Remove All Favourites
      </div>
      <ul>
        {props.displayFavouriteList.map((movieItem) => (
          <div className="movieList-Container" key={`Movie ${movieItem.name}`}>
            <div>
              <img
                src={movieItem.bannerUrl}
                className="Movie-logo"
                alt="movie"
              ></img>

              <div
                className="Favourite-button"
                onClick={() => props.handleFavouritesClick(movieItem)}
              >
                Remove From Favourites
              </div>
            </div>
            <div className="movieList-details" key={`Movie ${movieItem.name}`}>
              {movieItem.name}, <br /> {`Released On ${movieItem.releasedOn}`}
              <br />
              {/* {`Movie Watched: ${movieItem.watched.boolValue ? "Yes" : "No"}`} */}
              <button
                className="btn btn-primary"
                type="submit"
                onClick={() =>
                  props.handleMarkFavouriteMovieAsWatched(movieItem)
                }
              >{`Movie Watched: ${movieItem.isWatched ? "Yes" : "No"}`}</button>
            </div>
          </div>
        ))}
      </ul>
    </>
  );
};

export default FavouritesList;
