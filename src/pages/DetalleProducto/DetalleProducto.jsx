import React, { useCallback, useEffect, useState } from 'react'
import './DetalleProducto.css'
import { useParams } from 'react-router-dom'
import { getGame } from '../../lib/juegos.requests';
import { FaOpencart} from "react-icons/fa6";
import { useCartContext } from '../../state/Cart.context';
import { ItemCount } from '../../components/ItemCount/ItemCount';
import Loader from '../../components/loader/loader';

export default function DetalleProducto() {
  const {id} = useParams();
  const [game, setGame] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const {addProduct, itemInCart} = useCartContext();

  useEffect(() => {
    getGame(id).then((res) => {
      setIsLoading(false)
      setGame(res);
    });
  }, []);

  const handleAdd = useCallback(
    (qty) => {
      addProduct(game, qty);
    },
    [addProduct, game]
  );


  if(!Object.keys(game).length) return

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div id="container_card_detal" className='container_card_detal'>	
        <div className="product-details">
          <h1>{game.title}</h1>
          <p className="information">{game.description}</p>
          
          <div className="control">
            <ItemCount
              stock={game.stock - (itemInCart?.(id)?.qty || 0)} //Se obtiene el item si existe en el cart y se le resta al stock la cantidad que este en el cart (si no existe le resta 0 para evitar errores)
              onAdd={handleAdd}
            />
          </div>
            
        </div>
        
        <div className="product-image">
        
          <img src={game.img} alt="" />

          <div className="info">
            <h2>{game.title}</h2>
          </div>
        </div>

    </div>

      )}
  </>
  )
}
