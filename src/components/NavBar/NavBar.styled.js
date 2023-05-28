import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1;
  display: flex;
  align-items: center;
  padding: 20px;
  padding-left: 20px;
  gap: 40px;
  width: 100vw;
  background-color: #324052;
  box-shadow: gray;
`;

export const NavBarLink = styled(NavLink)`
  font-size: 24px;
  display: block;
  text-decoration: none;

  &.active {
    color: #d1e5ff;
    border-bottom: yellow;
  }
`;
