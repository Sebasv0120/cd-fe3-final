import React, { useContext } from 'react';
import { ContextGlobal } from '../Context';
import Card from './Card';

const Favs = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <div>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {state.favs.map((dentistId) => {
          const dentist = state.data.find((d) => d.id === dentistId);
          return dentist ? (
            <Card key={dentist.id} id={dentist.id} name={dentist.name} username={dentist.username} />
          ) : null;
        })}
      </div>
    </div>
  );
};

export default Favs;
