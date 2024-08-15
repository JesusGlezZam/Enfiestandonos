import React from 'react'
import { EventosPrincipal } from '../../general/EventosPrincipal'
import { FaSun } from 'react-icons/fa'

export const TerrazasList = () => {
  return (
    <div className='events'>
        <h2>Explora y elige la terraza perfecta para tu evento. </h2>
        <h3>Estilo y Vistas Incomparables <FaSun className="icon-terraza" /></h3>
        <p>Haz que tu celebración brille en nuestra terraza, un espacio moderno con vistas panorámicas. Perfecta para bodas y eventos especiales, ofrece un ambiente elegante y fresco que hará que cada momento sea memorable.</p>
        <EventosPrincipal eventType="terraza" />
    </div>
  )
}
