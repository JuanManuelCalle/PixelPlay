import React, { useEffect, useState } from 'react'
import './Cart.css';
import { useCartContext } from '../../state/Cart.context';
import { addOrder } from '../../lib/orders.request';
import { updateManyJuegos } from '../../lib/juegos.requests';

export default function Cart() {
  const [form, setForm] = useState({});

  const { cart, cleanCart, getTotalPrice, removeProduct } = useCartContext();


  const createOrder = async () => {
    const items = cart.map(({id, title, qty, price}) => ({
      id,
      title,
      qty,
      price
    }))

    console.log("Cart" + cart);

    const {name, email, telefono, direccion} = form;

    const order = {
      buyer: {name, email, telefono, direccion},
      items,
      total: getTotalPrice,
    };

    const id = await addOrder(order);
    console.log(id);

    await updateManyJuegos(items);

    cleanCart();
  };

  const handleChange = ({target: {value, name}}) => {
    setForm({
      ...form,
      [name]: value,
    })
  }

  return (
    <>
    {
    cart.length ? 
    <div className="">
        <h1 className='fw'>Carrito de compras </h1><button className="clear_cart" onClick={cleanCart}>Limpiar carrito</button>

        <div className="shopping-cart">

          <div className="column-labels">
            <label className="cart-image fw">Imagen</label>
            <label className="cart-details fw">Producto</label>
            <label className="cart-price fw">Precio</label>
            <label className="cart-quantity fw">Cantidad</label>
            <label className="cart-removal fw">Eliminar</label>
            <label className="cart-line-price fw">Total</label>
          </div>

          { cart.map((item) => (
            <div className="cart" key={item.id}>
              <div className="cart-image">
                <img src={item.img}/>
              </div>
              <div className="cart-details">
                <div className="cart-title fw">{item.title}</div>
                <p className="cart-description fw">{item.description}</p>
              </div>
              <div className="cart-price fw">{item.price.toLocaleString("es-CO")}</div>
              <div className="cart-quantity">
                <input type="number" defaultValue={item.qty}  min="1" disabled/>
              </div>
              <div className="cart-removal">
                <button className="remove-cart" onClick={() => removeProduct(item.id)}>
                  Borrar
                </button>
              </div>
              <div className="cart-line-price fw">{(item.qty * item.price).toLocaleString("es-CO")}</div>
            </div>
          ))}


            <div className="totals">
              <div className="totals-item">
                <label>Total</label>
                <div className="totals-value fw" id="cart-subtotal">{getTotalPrice.toLocaleString("es-CO")}</div>
              </div>
            </div>

          <h2 className='title_form'>Datos entrega</h2>
          <div className="grid">
            <div className="grid-row">
              <div className="input-group">
                <label htmlFor="name">Nombre</label>
                <input type="text" className='input_form' id='name' name='name' placeholder='Ingrese su nombre' onChange={handleChange} />
              </div>

              <div className="input-group">
                <label htmlFor="email">Correo</label>
                <input type="text" className='input_form' id='email' name='email' placeholder='Ingrese su correo' onChange={handleChange}/>
              </div>
            </div>

            <div className="grid-row">
              <div className="input-group">
                <label htmlFor="telefono">Telefono</label>
                <input type="text" className='input_form' id='telefono' name='telefono' placeholder='Ingrese su telefono' onChange={handleChange}/>
              </div>

              <div className="input-group">
                <label htmlFor="direccion">Direccion</label>
                <input type="text" className='input_form' id='direccion' name='direccion' placeholder='Ingrese su direccion' onChange={handleChange} />
              </div>
            </div>
            <div className="">
            <button className='btn_pedido' onClick={createOrder}>Realizar pedido</button>
            </div>
          </div>

        </div>
      </div> : <div className='div_message_alert'><h1 className='title_div_alert'>No hay items en el carrito</h1></div>
    }
    </>
  )
}
