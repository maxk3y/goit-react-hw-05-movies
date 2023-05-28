import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef, Suspense } from 'react';
import { API } from '../../services/fetchMovies';
import { Loader } from '../../services/loader';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { ButtonGoBack, AddInfoWrapper, InfoItem } from './MovieDetails.styled';
import Notiflix from 'notiflix';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState();

  const location = useLocation();

  const initialPath = useRef(location?.state?.from?.pathname || null);

  let backLink = '';
  if (initialPath.current === '/') {
    backLink = '/';
  } else backLink = '/movies';

  useEffect(() => {
    API.fetchMovieById(movieId)
      .then(movie => setMovieDetails(movie))
      .catch(() =>
        Notiflix.Notify.info('Sorry, there are not details of this movie')
      );
  }, [movieId]);

  return (
    <>
      {movieDetails && (
        <Suspense fallback={<Loader />}>
          <ButtonGoBack to={backLink}>⬅ Go back</ButtonGoBack>
          <MovieCard movieDetails={movieDetails} />
          <AddInfoWrapper>
            <InfoItem to={`/movies/${movieId}/cast`}>Cast</InfoItem>
            <InfoItem to={`/movies/${movieId}/reviews`}>Reviews</InfoItem>
          </AddInfoWrapper>
        </Suspense>
      )}
      {movieDetails && (
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      )}
    </>
  );
};

export default MovieDetails;
