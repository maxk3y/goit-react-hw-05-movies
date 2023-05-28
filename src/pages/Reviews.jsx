import { useState, useEffect, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../services/loader';
import { API } from '../services/fetchMovies';
import { ReviewList } from 'components/ReviewList/ReviewList';
import Notiflix from 'notiflix';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState();

  useEffect(() => {
    API.fetchReviewsById(movieId)
      .then(data => setReviews(data))
      .catch(() =>
        Notiflix.Notify.info('Sorry, there are not reviews of this movie')
      );
  }, [movieId]);

  return (
    <>
      <Suspense fallback={<Loader />}>
        {reviews && <ReviewList reviews={reviews} />}
      </Suspense>
    </>
  );
};

export default Reviews;
