import MoviesList from 'components/MoviesList/MoviesList';
import { getTrendingTodayMovies } from 'components/services/Api';
import React, { useEffect, useState } from 'react';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    'Something went wrong! Try again later'
  );

  useEffect(() => {
    setIsLoading(false);

    const getPopularMovies = async () => {
      try {
        const { results } = await getTrendingTodayMovies();
        setMovies(results);
      } catch (error) {
        setError(true);
        setErrorMessage(error.message);
      }
    };
    getPopularMovies();
  }, []);

  return (
    <div>
      {error && (
        <div>
          <p>{errorMessage}</p>
        </div>
      )}
      {isLoading ? (
        <div>
          <p>Loading...</p>
        </div>
      ) : (
        <MoviesList results={movies} />
      )}
    </div>
  );
};

export default HomePage;
