import React, { useEffect, useState } from 'react';
import { cargarData, getGames } from '../lib/juegos.requests';
import {CardList} from '../components/CardList/CardList';
import Loader from '../components/loader/loader';

export default function Home() {
  const [juegos, setJuegos] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  const containerStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
  };

  useEffect(() => {
    getGames()
    .then(res => {
      setIsLoading(false);
      setJuegos(res)
    })
  }, [])

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <CardList juegos={juegos} containerStyles={containerStyles} />
      )}
    </div>
  );

}
