import { useState, useEffect, lazy, Suspense } from 'react';
import { useSearchParams } from 'react-router-dom';
import { API } from '../services/fetchMovies';
import { Loader } from '../services/loader';
import { SearchMovie } from 'components/SearchMovie/SearchMovie';
import Notiflix from 'notiflix';

const MovieList = lazy(() => import('../components/MovieList/MovieList.jsx'));

const Movies = () => {
  const [query, setQuery] = useState(null);
  const [movies, setMovies] = useState(
    JSON.parse(localStorage.getItem('movies')) || null
  );

  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!movieName) return;

    API.fetchMovieSearch(movieName)
      .then(res => {
        setMovies(res);
        localStorage.setItem('movies', JSON.stringify(res));
      })
      .catch(() =>
        Notiflix.Notify.failure('Sorry, there are not details of this movie')
      );
  }, [movieName]);

  const onSubmitForm = search => {
    if (search !== query) {
      setQuery(search);
      setSearchParams({ query: search });
    } else {
      Notiflix.Notify.failure(
        'The new search must be different from the current search'
      );
    }
  };

  return (
    <>
      <SearchMovie value={movieName} onSubmit={onSubmitForm} />
      <Suspense fallback={<Loader />}>
        {movies && <MovieList movies={movies} />}
      </Suspense>
    </>
  );
};

export default Movies;
