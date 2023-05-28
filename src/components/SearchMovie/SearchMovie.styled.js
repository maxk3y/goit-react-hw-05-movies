import styled from 'styled-components';

export const SearchbarWrapper = styled.section`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 2;
  display: flex;
  align-items: center;
  width: 100vw;
  min-height: 50px;
  padding: 12px 24px;
  padding-left: 40px;
  background-color: #5e8cff;
  box-shadow: gray;
`;

export const SearchForm = styled.form`
  display: flex;
  width: 100%;
  max-width: 600px;
  background-color: orange;
  border-radius: 4x;
  overflow: hidden;
`;

export const SearchButton = styled.button`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 1px solid rgb(190, 190, 190);
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.5px;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1px;
  }
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 24px;
  border: none;
  outline: none;
  padding: 10px;
  &::placeholder {
    font-style: inherit;
    font-size: 20px;
  }
`;
