import React from 'react'
import { EventosPrincipal } from '../../general/EventosPrincipal'

export const SalonesList = () => {
  return (
    <div className='events'>
      <h2>Elegancia y Sofisticación en Cada Detalle</h2>
      <h3>El lugar perfecto para tu evento especial.</h3>
      <p>Haz de tu boda o fiesta de XV años un evento extraordinario en nuestros elegantes salones. Ofrecemos un ambiente refinado y personalizado que realzará cada momento de tu celebración, creando recuerdos que durarán para siempre.</p>
      <EventosPrincipal  eventType="salon" />
    </div>
  )
}
