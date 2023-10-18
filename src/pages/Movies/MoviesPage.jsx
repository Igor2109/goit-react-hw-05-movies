import HomeList from 'components/HomeListItem/HomeList';
import { getSearchMoviesByQuery } from 'components/services/Api';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  const query = searchParams.get('query');

  useEffect(() => {
    const getMovie = async () => {
      if (query) {
        try {
          const data = await getSearchMoviesByQuery(query);
          setMovies(data.results);
        } catch (error) {}
      }
    };
    getMovie();
  }, [query]);

  const handleOnSubmit = e => {
    e.preventDefault();
    const searchQuery = e.currentTarget.elements.searchMovieByName.value;
    setSearchParams({ query: searchQuery });
    e.currentTarget.reset();
  };
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <label>
          <p>Search movie by name</p>
          <input className="input" type="text" name="searchMovieByName" />
        </label>
        <button className="btnSubmit">Submit</button>
      </form>
      {movies.length > 0 && <HomeList movies={movies} />}
    </div>
  );
};

export default MoviesPage;
