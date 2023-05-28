import { NavBarLink, Header } from './NavBar.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from 'services/loader';

export const NavBar = () => {
  return (
    <>
      <Header>
        <NavBarLink to="/">Home</NavBarLink>
        <NavBarLink to="/movies">Movies</NavBarLink>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
