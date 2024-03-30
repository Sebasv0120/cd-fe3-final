import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from '../Context';

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  const toggleTheme = () => {
    dispatch({ type: 'CHANGE_THEME' });
  };

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/contacto">Contacto</Link>
      <Link to="/favs">Favoritos</Link>
      <button onClick={toggleTheme}>Change theme</button>
    </nav>
  );
};

export default Navbar;