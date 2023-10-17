import { getMovieById } from 'components/services/Api';
import React, { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const movieDetails = await getMovieById(movieId);
        setMovie(movieDetails);
      } catch (error) {}
    };
    getMovieDetails();
  }, [movieId]);

  console.log(movie);
  return (
    <div>
      <div>
        Movie Details
        {movie && (
          <div>
            {' '}
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>Title: {movie.title}</h3>
            <div>Overview: {movie.overview}</div>
            <p>Average: {movie.vote_average}</p>
            <p>Release date: {movie.release_date}</p>
          </div>
        )}
        <ul>
          <li>
            <Link to={'cast'}>Cast</Link>
          </li>
          <li>
            <Link to={'reviews'}>Reviews</Link>
          </li>
        </ul>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
