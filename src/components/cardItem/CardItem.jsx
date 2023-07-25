import React from 'react'
import './cardItem.css'
import { NavLink} from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function CardItem({img, category, title, id, price, style}) {
  const navigate = useNavigate();
  return (
    <>
    <div className="containerCard" style={style}>
    <div className="wrapper">
    <div>
      <img src={img} alt="" className='banner-image' />
    </div>
    <h1 className='titleCard'>{title}</h1>
    <p className='textCard'>{category}</p>
    </div>
    <div className="button-wrapper"> 
        <button className="btn_card btn_out" onClick={()=> navigate(`/detalle/${id}`)}>DETALLES</button>
        <button className="btn_card fill">COMPRAR AHORA</button>
    </div>
        </div>

    </>
  )
}
