import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    const fetchDentist = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (response.ok) {
          const data = await response.json();
          setDentist(data);
        } else {
          throw new Error('Error fetching dentist');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchDentist();

    // Cleanup function
    return () => {
      setDentist(null);
    };
  }, [id]);

  return (
    <div>
      <h1>Detail Dentist id {id}</h1>
      {dentist && (
        <table>
          <tbody>
            <tr>
              <th>Name:</th>
              <td>{dentist.name}</td>
            </tr>
            <tr>
              <th>Email:</th>
              <td>{dentist.email}</td>
            </tr>
            <tr>
              <th>Phone:</th>
              <td>{dentist.phone}</td>
            </tr>
            <tr>
              <th>Website:</th>
              <td>{dentist.website}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Detail;