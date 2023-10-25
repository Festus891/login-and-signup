import React, { useEffect, useState } from "react";
import axios from "..//axios";

function Row({ title, fetchUrl }) {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request.data.results);
      setMovie(request.data.results);
      return request;
    }
    fetchData();
  }, []);

  console.table(movie);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_poster">
        {movie.map((movies) => (
          <img src={movies.poster_path} alt={movies.name} />
        ))}
      </div>
    </div>
  );
}

export default Row;
