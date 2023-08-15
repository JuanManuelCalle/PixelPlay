import React from 'react'
import { FaOpencart} from "react-icons/fa6";
import { useCartContext } from '../../state/Cart.context';
import { useNavigate } from 'react-router-dom';
import './CartWidget.css'

export default function CartWidget() {
  const { getCartQty } = useCartContext();
  const navigate = useNavigate();
    return (
    <div className="nav-link">
        <div className="nav-link-span  cart_icon" onClick={() => {
            navigate('/cart');
        }}>
          <div className="u-nav"><FaOpencart />{getCartQty ?  <span className="cart-widget__qty">({getCartQty})</span> : null}</div>
        </div>
    </div>
  )
}
