import React, { useEffect, useState } from 'react'
import './DetalleProducto.css'
import { useParams } from 'react-router-dom'
import { getGame } from '../../lib/juegos.requests';
import { FaOpencart} from "react-icons/fa6";

export default function DetalleProducto() {
  const {id} = useParams();
  const [game, setGame] = useState({});


  useEffect(() => {
    getGame(+id).then((res) => {
      setGame(res);
    });
  }, []);

  if(!Object.keys(game).length) return

  return (
        <div id="container_card_detal" className='container_card_detal'>	
      
      <div className="product-details">
        
        <h1>{game.title}</h1>
        
        <p className="information">{game.description}</p>
        
        <div className="control">
          <button className="btn_card_detalle">
            <span className="price">$
            {(game.price || 0).toLocaleString("es-CO", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
            </span>
            <span className="shopping-cart"><FaOpencart /></span>
            <span className="buy">Comprar</span>
          </button>
        </div>
          
      </div>
      
      <div className="product-image">
      
        <img src={game.img} alt="" />

        <div className="info">
          <h2>{game.title}</h2>
        </div>
      </div>
    </div>

  )
}
