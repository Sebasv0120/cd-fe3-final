import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from '../Context';

const Card = ({ name, username, id }) => {
  const { state, dispatch } = useContext(ContextGlobal);

  const addFav = () => {
    dispatch({ type: 'ADD_FAV', payload: id });
  };

  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{username}</p>
      <Link to={`/dentist/${id}`}>Ver detalle</Link>
      <button onClick={addFav} className="favButton">
        Add fav
      </button>
    </div>
  );
};

export default Card;
