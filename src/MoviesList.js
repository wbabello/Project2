import axios from "axios";
import { useEffect, useState } from "react";

function MovieList() {
  const [movieList, setMovieList] = useState([]);

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
          <li key={`Movie ${movieList.name}`}>
            {movieItem.name}, {`Released On ${movieItem.releasedOn}`},
            {movieItem.watched}
          </li>
        ))}
      </ul>
    </>
  );
}

export default MovieList;
