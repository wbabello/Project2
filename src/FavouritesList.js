import React from "react";

const FavouritesList = (props) => {
  console.log("props +++", props);
  return (
    <>
      <h2 clasName="MyFavouriteList bg-secondary text-white height: 100%">
        My Favourite List
      </h2>

      <div
        className="RemoveAllFavourites-button btn btn-warning btn-lg btn-block py-3 mt-5"
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
                className="rounded"
                alt="Cinque Terre"
              ></img>

              <div
                className="Favourite-button"
                onClick={() => props.handleFavouritesClick(movieItem)}
              >
                Remove From Favourites
              </div>
            </div>
            <div
              className="movieList-details col-sm-12 col-md-6"
              key={`Movie ${movieItem.name}`}
            >
              {movieItem.name} <br /> {`Released On: ${movieItem.releasedOn}`}
              <br />
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
