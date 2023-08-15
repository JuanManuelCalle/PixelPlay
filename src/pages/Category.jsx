import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getGames } from '../lib/juegos.requests'
import { CardList } from '../components/CardList/CardList'


export default function Category() {
  const {id} = useParams();
  const [juegos, setJuegos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const containerStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
  };

  const cardItemStyles = {
    flexBasis: '37.33%', // O cualquier otro porcentaje adecuado
    margin: '10px',
  };

  useEffect(() => {
    setJuegos([]);
    setIsLoading(true);
    getGames(id).then((res) => {
      setIsLoading(false);
      setJuegos(res);
    })
  }, [id])

  return (
    <div style={containerStyles}>
      {/* <CardList style={cardItemStyles} juegos={juegos} /> */}
      <CardList style={cardItemStyles} juegos={juegos} containerStyles={containerStyles} loading={isLoading} />
    </div>
  );
}
