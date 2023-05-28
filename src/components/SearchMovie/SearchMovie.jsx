import { useState } from 'react';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
import {
  SearchbarWrapper,
  SearchForm,
  SearchButton,
  SearchFormInput,
} from './SearchMovie.styled';

export function SearchMovie({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleChangeInput = evt => {
    setQuery(evt.currentTarget.value.toLowerCase());
  };

  const handleSubmitForm = evt => {
    evt.preventDefault();
    if (query.trim() === '' || query.length < 2) {
      Notiflix.Notify.info('Searching must be no empty and more than 1 letter');
      resetForm();
      return;
    }
    onSubmit(query);
    resetForm();
  };

  const resetForm = () => setQuery('');

  return (
    <SearchbarWrapper>
      <SearchForm onSubmit={handleSubmitForm}>
        <SearchFormInput
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search movies..."
          value={query}
          onChange={handleChangeInput}
        />
        <SearchButton type="submit"></SearchButton>
      </SearchForm>
    </SearchbarWrapper>
  );
}

SearchMovie.propTypes = {
  onSubmit: PropTypes.func,
};
