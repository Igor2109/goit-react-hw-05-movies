import React from 'react';
import { Link } from 'react-router-dom';

const MovieItem = ({ id, title, poster_path }) => {
  return (
    <li>
      <Link to={`/movies/${id}`}>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'
          }
          alt="poster"
        />
        <h2>{title}</h2>
      </Link>
    </li>
  );
};

export default MovieItem;
