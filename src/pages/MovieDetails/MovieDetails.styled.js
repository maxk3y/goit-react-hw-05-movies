import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';

export const ButtonGoBack = ({ to, children }) => {
  return <ButtonStyles to={to}>{children}</ButtonStyles>;
};

export const ButtonStyles = styled(Link)`
  font-size: 16px;
  text-decoration: none;
  text-align: center;
  display: inline-block;
  color: inherit;
  background-color: rgb(220, 220, 220);

  width: 120px;
  margin-top: 10px;
  margin-left: 40px;
  padding: 5px 10px;

  border-radius: 2px;
  border: none;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  cursor: pointer;

  &:hover,
  &:focus {
    background-color: rgb(200, 200, 200);
    color: orange;
  }
`;

export const AddInfoWrapper = styled.div`
  display: flex;
  gap: 25px;
  padding-left: 40px;
  margin-top: 10px;
`;

export const InfoItem = styled(NavLink)`
  font-size: 18px;
  text-decoration: none;
  text-align: center;
  color: inherit;
  background-color: rgb(220, 220, 220);
  padding: 5px 10px;
  width: 100px;
  margin: 0;

  border-radius: 2px;
  border: none;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  cursor: pointer;

  &:hover,
  &:focus {
    background-color: rgb(210, 210, 210);
    color: orange;
  }
`;

ButtonGoBack.propTypes = {
  to: PropTypes.string.isRequired,
};
