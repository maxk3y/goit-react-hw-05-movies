import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
  padding-left: 40px;
`;

export const MovieLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 20px;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  width: 400px;
  padding: 20px;
  padding-left: 20px;
  background-color: #d6d6d6;
  border-radius: 3px;
  box-shadow: pink;

  &:hover,
  &:focus {
    color: blue;
    background-color: #9fc1d6;
    box-shadow: red;
  }
`;

export const MovieImg = styled.img`
  display: block;
  max-width: 150px;
  height: auto;
`;
