import { StyledAppContainer, StyledNavLink } from 'App.styled';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import MoviesPage from './pages/Movies/MoviesPage';
import MovieDetailsPage from './pages/MovieDetails/MovieDetailsPage';
import CastPage from './pages/Cast/CastPage';
import ReviewsPage from './pages/Reviews/ReviewsPage';

export const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout />} >
           <Route index element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
            <Route path="/movies/:movieId/cast" element={<CastPage />} />
            <Route path="/movies/:movieId/reviews" element={<ReviewsPage />} />
        </Route>
      </Routes>
    
  );
};
