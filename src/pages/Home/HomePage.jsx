import MoviesList from 'components/MoviesList/MoviesList';
import { getTrendingTodayMovies } from 'components/services/Api';
import React, { useEffect, useState } from 'react'

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(()=> {
    const getPopularMovies = async () => {
    const {results} = await getTrendingTodayMovies();
setMovies(results)    }
    getPopularMovies()

  },[])

  return (
    <div>
      <MoviesList results={movies}/>
    </div>
  )
}

export default HomePage