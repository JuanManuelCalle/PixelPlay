import React from 'react';
import './NotFound.css'
import { FaGhost } from "react-icons/fa6";


export default function NotFound() {
  return (
    <>
      <main className='principal'>
        <h1 className='title404'>4<span className='SpanGhost'><FaGhost className='ghostIcon'/></span>4</h1>
        <h2 className='texto'>Error: 404 Página no encontrada</h2>
        <p className='parrafo'>Lo siento, la página que estás buscando no puede ser encontrada</p>
      </main>
    </>
  );
}
