import React from "react";
import MovieCard from "../movieCard/MovieCard";

const MovieList = ({ movies }) => {
  return (
    <div className="container">
      <div className="row ml-5">
        {movies.map((elt) => (
          <MovieCard movie={elt} key={elt.id} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
