import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const HomeList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className="movieLinkList">
      {movies.map(movie => (
        <Link
          state={{ from: location }}
          className="movieLink"
          key={movie.id}
          to={`/movies/${movie.id}`}
        >
          <li className="movieItem">
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'
              }
              width={130}
              height={180}
              alt="poster"
            />
            <p>{movie.title ? movie.title : movie.name}</p>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default HomeList;
