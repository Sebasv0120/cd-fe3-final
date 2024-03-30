import React, { useContext } from 'react';
import { ContextGlobal } from '../Context';
import Card from './Card';

const Home = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <main>
      <h1>Home</h1>
      <div className='card-grid'>
        {state.data.map((dentist) => (
          <Card key={dentist.id} id={dentist.id} name={dentist.name} username={dentist.username} />
        ))}
      </div>
    </main>
  );
};

export default Home;