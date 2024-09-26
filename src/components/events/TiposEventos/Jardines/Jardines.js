import React from 'react';
import { EventosPrincipal } from '../../EventosPrincipal';
import { FaLeaf } from 'react-icons/fa';



export const Jardines = () => {

  return (
    <div className='events'>    
      <h2>Explora y elige el jardín perfecto para tu evento. </h2>
      <h3>Un jardín perfecto para tus celebraciones al aire libre.  <FaLeaf className="icon-jardin" FaLeaf/></h3>
      <p>Disfruta de la belleza y frescura de nuestro jardín, ideal para bodas, eventos infantiles y reuniones especiales. Con amplias áreas verdes y un ambiente relajante, tu evento se transformará en una experiencia inolvidable bajo el cielo abierto.</p>
      <EventosPrincipal eventType="jardin" />
    </div>
  );
}
