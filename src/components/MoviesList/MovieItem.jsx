import React from 'react';
import { Link } from 'react-router-dom';

const MovieItem = ({ id, title, poster_path }) => {
  return (

    <li>
        <Link to={`/movies/${id}`}>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="title" />
      <h2>
        {title}
      </h2>
      </Link>
    </li>
  );
};

export default MovieItem;
