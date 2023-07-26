import React, { useEffect, useState } from 'react';
import { getGames } from '../lib/juegos.requests';
import {CardList} from '../components/CardList/CardList';

export default function Home() {
  const [juegos, setJuegos] = useState([])

  const containerStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
  };

  useEffect(() => {
    getGames()
    .then(res => {
      setJuegos(res)
    })
  }, [])

  return (
    <div>
      <CardList juegos={juegos} containerStyles={containerStyles} />
    </div>
  );

}
