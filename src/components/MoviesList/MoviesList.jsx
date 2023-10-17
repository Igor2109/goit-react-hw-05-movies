import React from 'react';
import MovieItem from './MovieItem';

const MoviesList = ({ results }) => {
  console.log(results);
  return (
    <ul>
      {results.map(({ id, name, title, poster_path }) => (
        <MovieItem
          key={id}
          id={id}
          title={name ?? title}
          poster_path={poster_path}
        />
      ))}
    </ul>
  );
};

export default MoviesList;
