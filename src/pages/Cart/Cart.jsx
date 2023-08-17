import React, { useEffect, useState } from 'react'
import './Cart.css';
import { useCartContext } from '../../state/Cart.context';
import { addOrder } from '../../lib/orders.request';
import { updateManyJuegos } from '../../lib/juegos.requests';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export default function Cart() {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const { cart, cleanCart, getTotalPrice, removeProduct } = useCartContext();

  const validateForm = () => {
    const errores = {};

    if (!form.name) {
      errores.name = 'Debe ingresar un nombre.';
    }

    if (!form.email) {
      errores.email = 'Debe ingresar un correo electrónico.';
    } else if (!isValidEmail(form.email)) {
      errores.email = 'El correo electrónico no es válido.';
    }

    if (!form.emailConfirmacion) {
      errores.emailConfirmacion = 'Debe confirmar su correo electrónico.';

    } else if (form.emailConfirmacion !== form.email) {
      errores.emailConfirmacion = 'Los correos electrónicos no coinciden.';
    }

    if (!form.telefono) {
      errores.telefono = 'Debe ingresar un teléfono.';
    }

    if (!form.direccion) {
      errores.direccion = 'Debe ingresar una dirección.';
    }

    setErrors(errores);
    return Object.keys(errores).length === 0;
  };

  const isValidEmail = (email) => {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
  };

  const copiarId = (text) => {
    navigator.clipboard.writeText(text);
    toast.info('Id copiado al portapapeles', { position: 'top-right' });
  }  

  const createOrder = async () => {
    const isValidar = validateForm();
    const items = cart.map(({id, title, qty, price}) => ({
      id,
      title,
      qty,
      price
    }))

    console.log("Cart" + cart);

    const {name, email, telefono, direccion} = form;

    if (email !== form.emailConfirmacion) {
      toast.error('Los correos electrónicos no coinciden.', { position: 'top-right' });
      return;
    }

    const order = {
      buyer: {name, email, telefono, direccion},
      items,
      total: getTotalPrice,
    };

    const id = await addOrder(order);
    if(id){
      toast.info(
        <div>
          <span>Compra realizada con exito</span>
          <button className='btn_toast' onClick={() => copiarId(id)}>Copiar id</button>
        </div>,
        { position: 'top-right' }
      );
      console.log(id);
    }

    await updateManyJuegos(items);

    cleanCart();
  };

  const handleChange = ({ target: { value, name } }) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <>
    <ToastContainer />
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
                <input
                  type="text"
                  className='input_form'
                  id='name'
                  name='name'
                  placeholder='Ingrese su nombre'
                  onChange={handleChange}
                />
                {errors.name && <span className='colorW'>{errors.name}</span>}
              </div>

              <div className="input-group">
                <label htmlFor="email">Correo</label>
                <input
                  type="email"
                  className='input_form'
                  id='email'
                  name='email'
                  placeholder='Ingrese su correo'
                  onChange={handleChange}
                />
                {errors.email && <span className='colorW'>{errors.email}</span>}
              </div>
            </div>

            <div className="grid-row">
              <div className="input-group">
                <label htmlFor="emailConfirmacion">Confirmar Correo</label>
                <input
                  type="email"
                  className='input_form'
                  id='emailConfirmacion'
                  name='emailConfirmacion'
                  placeholder='Confirme su correo'
                  onChange={handleChange}
                />
                {errors.emailConfirmacion && <span className='colorW'>{errors.emailConfirmacion}</span>}
              </div>

              <div className="input-group">
                <label htmlFor="telefono">Telefono</label>
                <input
                  type="text"
                  className='input_form'
                  id='telefono'
                  name='telefono'
                  placeholder='Ingrese su telefono'
                  onChange={handleChange}
                />
                {errors.telefono && <span className='colorW'>{errors.telefono}</span>}
              </div>
            </div>

            <div className="grid-row">
              <div className="input-group">
                <label htmlFor="direccion">Direccion</label>
                <input
                  type="text"
                  className='input_form'
                  id='direccion'
                  name='direccion'
                  placeholder='Ingrese su direccion'
                  onChange={handleChange}
                />
                {errors.direccion && <span className='colorW'>{errors.direccion}</span>}
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
