import React from 'react'
import { EventosPrincipal } from '../../general/EventosPrincipal'

export const HaciendasList = () => {
  return (
    <div className='events'>
    <h2>Tradición y Elegancia en un Solo Lugar</h2>
    <h3>La hacienda perfecta para eventos sofisticados.</h3>
    <p>Celebra tu boda o fiesta de XV años en nuestra hacienda, donde la historia y el lujo se encuentran. Con su arquitectura clásica y amplios espacios, ofrecemos un ambiente refinado y lleno de carácter para eventos inolvidables.</p>
    <EventosPrincipal eventType="jardin" />
  </div>
  )
}
