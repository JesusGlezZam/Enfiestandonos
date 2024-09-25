import React, { useEffect, useState } from 'react';
import { FaClock, FaClipboardList, FaUser, FaUtensils, FaCocktail,  FaPlusCircle,  } from 'react-icons/fa';
import {  FaStar } from 'react-icons/fa6';


// Datos de los paquetes
const paquetes = [
  {
    nombre: 'A Celebrar',
    detalles: [
      'Espacio para el evento',
      'Duración de 6 horas',
      '30 minutos de tiempo de entrada',
      '30 minutos de tiempo de salida',
      'DJ por 6 horas',
      'Brincolín para los niños',
      'Menú taquiza',
    ],
    recomendaciones: [
      'Animador de eventos',
      'Mesa de dulces',
      'Decoración con globos',
      'Arreglos florales',
    ],
  },
  {
    nombre: 'Enfiestándonos',
    detalles: [
      'Espacio para el evento',
      'Duración de 6 horas',
      '30 minutos de tiempo de entrada',
      '30 minutos de tiempo de salida',
      'Meseros',
      'Barman',
      'DJ por 6 horas',
      'Brincolín para los niños',
      'Menú infantil (menores de n años)',
      'Menú de 3 tiempos',
    ],
    recomendaciones: [
      'Animador de eventos',
      'Música versátil',
      'Mesa de dulces',
      'Decoración con globos',
      'Arreglos florales',
      'Torna fiesta',
    ],
  },
  {
    nombre: 'Fiesta Sin Fin',
    detalles: [
      'Espacio para el evento',
      'Animador de eventos',
      'Duración de 6 horas',
      '30 minutos de tiempo de entrada',
      '30 minutos de tiempo de salida',
      'Meseros',
      'Barman',
      'Torna fiesta',
      'DJ por 6 horas',
      'Brincolín para los niños',
      'Menú de 3 tiempos',
      'Menú infantil (menores de n años)',
    ],
    recomendaciones: [
      'Música versátil',
      'Música banda',
      'Mariachi',
      'Barra libre',
      'Mesa de dulces',
      'Decoración con globos',
      'Arreglos florales',
    ],
  },
];

// Componente para mostrar los paquetes
const EventPackagesDisplay = ({ nombre, detalles, recomendaciones }) => (
  <div className="paquete">
    <h2>{nombre}</h2>
    <h3>Detalles:</h3>
    <ul>
      {detalles.map((detalle, index) => (
        <li key={index}>{detalle}</li>
      ))}
    </ul>
    <h3>Recomendaciones a contratar:</h3>
    <ul>
      {recomendaciones.map((recomendacion, index) => (
        <li key={index}>{recomendacion}</li>
      ))}
    </ul>
  </div>
);

// Componente principal PaqueteList
const PaqueteList = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSection = () => setIsOpen(!isOpen);


   // Desplazarse al inicio al cargar el componente
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Dependencia vacía asegura que se ejecute solo una vez al montar

  return (
    <div className="requisitos">
       <h1>¡Bienvenido a Enfiestándonos!</h1>
       <p>
        Estamos encantados de que consideren registrar su salón con nosotros. Para garantizar que cada evento sea memorable y satisfactorio, les proponemos que armen tres paquetes de servicios dentro de nuestra plataforma: <strong>A Celebrar</strong>, <strong>Enfiestándonos</strong>, y <strong>Fiesta Sin Fin</strong>.
      </p>
    
      <div className="paquete-section">
        {/*<h2 onClick={toggleSection} className="section-title">*/}
          <h2  className="section-title">
          {isOpen ? 'Elementos Esenciales del Paquete' : 'Elementos Esenciales del Paquete'} {/*<span>{isOpen ? '-' : '+'}</span>*/}
        </h2>
        {isOpen && (
          <div className="paquete-details">
            <ul className="paquete-detail-list">
              <li>
                <FaClock /> <strong>Duración del Evento:</strong> N horas, para disfrutar al máximo.
              </li>
              <li>
                <FaClipboardList /> <strong>Tiempo de Recibimiento:</strong> 30 minutos para organizar todo antes de comenzar.
              </li>
              <li>
                <FaClipboardList /> <strong>Tiempo de Salida:</strong> 30 minutos para una despedida tranquila.
              </li>
              <li>
                <FaUser /> <strong>Meseros:</strong> Personal capacitado y amable, listo para atender a sus invitados.
              </li>
              <li>
                <FaUtensils /> <strong>Tipo de Comida:</strong> Menú variado adaptado a su elección de paquete.
              </li>
              <li>
                <FaCocktail /> <strong>Bebidas:</strong> Selección de bebidas para complementar su evento, asegurando satisfacción.
              </li>
              <li>
                <FaStar /> <strong>Amenidades:</strong> Acceso a instalaciones como pista de baile y área de descanso.
              </li>
              <li>
                <FaPlusCircle /> <strong>Servicios adicionales:</strong> Opción de contratar decoración y música en vivo.
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className='clause'>
        <strong>Cláusula:</strong> Todos los paquetes que incluyan refresco deben incluir un vitrolero de agua para mantenerse hidratados.
      </div>
      

      <p>
      Estos paquetes son ejemplos de cómo van incrementando en opciones y servicios. Además, les sugerimos que consideren agregar recomendaciones adicionales, que pueden tener un costo extra, para personalizar aún más el evento.
      </p>

      <h2>Ejemplo de Paquetes de Eventos</h2>

      <div className="paquete-list">
        {paquetes.map((paquete, index) => (
          <EventPackagesDisplay
            key={index}
            nombre={paquete.nombre}
            detalles={paquete.detalles}
            recomendaciones={paquete.recomendaciones}
          />
        ))}
      </div>
     
    </div>
  );
};

export default PaqueteList;
