import { EventosPrincipal } from '../../EventosPrincipal'
import { FaConciergeBell } from 'react-icons/fa'

export const HaciendasList = () => {
  return (
    <div className='events'>
    <h2>Explora y elige la hacienda perfecta para tu evento. </h2>
    <h3>Tradición y Elegancia en un Solo Lugar <FaConciergeBell className="icon-hacienda" /></h3>
    <p>Celebra tu boda o fiesta de XV años en nuestra hacienda, donde la historia y el lujo se encuentran. Con su arquitectura clásica y amplios espacios, ofrecemos un ambiente refinado y lleno de carácter para eventos inolvidables.</p>
    <EventosPrincipal eventType="hacienda" />
  </div>
  )
}
