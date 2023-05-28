import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { MovieListWrapper, MovieImg, MovieLink } from './MovieList.styled';
import { POSTER_URL } from '../../services/posterUrl';
import noImage from '../../images/noImage.png';

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <MovieListWrapper>
      {movies.map(({ id, title, backdrop_path }) => {
        return (
          <MovieLink key={id} to={`/movies/${id}`} state={{ from: location }}>
            {backdrop_path && (
              <MovieImg src={`${POSTER_URL}${backdrop_path}`} alt={title} />
            )}
            {!backdrop_path && <MovieImg src={noImage} alt={title} />}
            {title}
          </MovieLink>
        );
      })}
    </MovieListWrapper>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MovieList;
