import React, { useEffect, useState } from 'react';
import CardItem from '../components/cardItem/CardItem';
import { getGames } from '../lib/juegos.requests';

export default function productos() {
  const containerStyles = {
    display: 'flex',
    flexWrap: 'wrap', // Permite que los elementos pasen a la siguiente fila
    width: '100%', // Ancho del contenedor principal
  };

  const cardItemStyles = {
    flexBasis: 'calc(25% - 20px)', // Ancho del elemento (ajustado para 4 elementos por fila)
    margin: '10px',
    width: '100%', // Ancho del elemento interno al 100%
  };

  const [juegos, setJuegos] = useState()

  useEffect(() => {
    getGames()
    .then(res => {
      setJuegos(res)
    })
  }, [])

  return (
    <div style={containerStyles}>
      <CardList style={cardItemStyles} juegos={juegos} />
    </div>
  );
}
