import { BsFillGiftFill } from 'react-icons/bs'
import { EventosPrincipal } from '../../EventosPrincipal'


export const InfatilesList = () => {
  return (
    <div className='events'>
    <h2>Explora y elige el salon infantil perfecto para tu evento. </h2>
    <h3>¡Diversión y Magia en Cada Rincón!  <BsFillGiftFill className="icon-infantil"></BsFillGiftFill></h3>
    <p>Crea recuerdos inolvidables con nuestras áreas diseñadas especialmente para eventos infantiles. Disfruta de un entorno alegre y seguro donde los más pequeños pueden explorar, jugar y celebrar su día de manera mágica.</p>
    <EventosPrincipal  eventType="infantil" />
 </div>
  )
}
