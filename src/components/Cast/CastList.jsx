import { getMovieCasts } from 'components/services/Api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CastList = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);
  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const actors = await getMovieCasts(movieId);
        setCast(actors.cast);
      } catch (error) {}
    };
    getMovieDetails();
  }, [movieId]);
  return (
    <ul>
      {cast &&
        cast.map(actor => (
          <li key={actor.id}>
            <img
              src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
              alt={actor.name}
            />
            <h3>Name: {actor.name}</h3>
            <p>Character: {actor.character}</p>
          </li>
        ))}
    </ul>
  );
};

export default CastList;
