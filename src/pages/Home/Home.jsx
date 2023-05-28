import { useState, useEffect, lazy, Suspense } from 'react';
import { API } from 'services/fetchMovies';
import Notiflix from 'notiflix';
import { HomeTitle } from './Home.styled';
import { Loader } from 'services/loader';

const MovieList = lazy(() =>
  import('../../components/MovieList/MovieList.jsx')
);

const Home = () => {
  const [trendMovies, setTrendMovies] = useState(null);
  localStorage.removeItem('movies');

  useEffect(() => {
    API.fetchMovieTrends()
      .then(res => setTrendMovies(res))
      .catch(() =>
        Notiflix.Notify.warning('Sorry, today there are not trending movies')
      );
  }, []);

  return (
    <>
      {trendMovies && <HomeTitle>Trending today</HomeTitle>}
      <Suspense fallback={<Loader />}>
        {trendMovies && <MovieList movies={trendMovies} />}
      </Suspense>
    </>
  );
};

export default Home;
