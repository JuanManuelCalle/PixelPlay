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

  const cardItemStyles = {
    flexBasis: 'calc(25% - 20px)',
    margin: '10px',
    width: '100%',
  };

  useEffect(() => {
    getGames()
    .then(res => {
      setJuegos(res)
    })
  }, [])

  return (
    <div style={containerStyles}>
      {/* <CardList style={cardItemStyles} juegos={juegos} /> */}
      <CardList style={cardItemStyles} juegos={juegos} containerStyles={containerStyles} />
    </div>
  );

}
