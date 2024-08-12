import React from 'react'
import { EventosPrincipal } from '../../general/EventosPrincipal'

export const TerrazasList = () => {
  return (
    <div className='events'>
        <h2>Estilo y Vistas Incomparables</h2>
        <h3>Una terraza ideal para eventos con vista.</h3>
        <p>Haz que tu celebración brille en nuestra terraza, un espacio moderno con vistas panorámicas. Perfecta para bodas y eventos especiales, ofrece un ambiente elegante y fresco que hará que cada momento sea memorable.</p>
        <EventosPrincipal eventType="salon" />
    </div>
  )
}
