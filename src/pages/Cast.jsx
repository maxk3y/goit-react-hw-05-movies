import Notiflix from 'notiflix';
import { useState, useEffect, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { API } from 'services/fetchMovies';
import { Loader } from 'services/loader';
import { CastList } from '../components/CastList/CastList';

const Cast = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState();

  useEffect(() => {
    API.fetchCreditsById(movieId)
      .then(data => setCredits(data))
      .catch(() =>
        Notiflix.Notify.info('Sorry, there is not cast of this movie')
      );
  }, [movieId]);

  return (
    <>
      <Suspense fallback={<Loader />}>
        {credits && <CastList credits={credits} />}
      </Suspense>
    </>
  );
};

export default Cast;
