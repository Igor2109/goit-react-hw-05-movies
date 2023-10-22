import { getMovieReviews } from 'components/services/Api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getReviewsDetails = async () => {
      setIsLoading(true);
      try {
        const reviews = await getMovieReviews(movieId);
        setReviews(reviews.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getReviewsDetails();
  }, [movieId]);
  return (
    isLoading,
    error,
    (
      <div>
        {reviews.length > 0 && (
          <ul>
            {reviews.map(({ author, content, id }) => (
              <li key={id}>
                <h2>Author: {author}</h2>
                <p>Content: {content}</p>
              </li>
            ))}
          </ul>
        )}{' '}
      </div>
    )
  );
};

export default Reviews;
