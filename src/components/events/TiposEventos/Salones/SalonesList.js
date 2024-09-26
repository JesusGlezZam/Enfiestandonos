import React from 'react'
import { EventosPrincipal } from '../../EventosPrincipal'
import { FaGlassCheers } from 'react-icons/fa'

export const SalonesList = () => {
  return (
    <div className='events'>
      <h2>Explora y elige el salon infantil perfecto para tu evento.</h2>
      <h3>Elegancia y Sofisticación en Cada Detalle <FaGlassCheers  className="icon-salon"/></h3>
      <p>Haz de tu boda o fiesta de XV años un evento extraordinario en nuestros elegantes salones. Ofrecemos un ambiente refinado y personalizado que realzará cada momento de tu celebración, creando recuerdos que durarán para siempre.</p>
      <EventosPrincipal  eventType="salon" />
    </div>
  )
}
