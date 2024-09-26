import React, { useState } from 'react';
import './requisitos.css';
import PaqueteList from './EventPackagesDisplay';

const requisitos = [
  {
    tipo: 'Jardín',
    requisitos: [
      'Espacio amplio y seguro, ideal para eventos al aire libre.',
      'Mobiliario adecuado: sillas y mesas para los asistentes.',
      'Rutas accesibles y estacionamiento cercano.',
      'Servicios sanitarios suficientes para los invitados.',
      'Opciones de sombra y resguardo contra la lluvia.',
    ],
  },
  {
    tipo: 'Salón de Fiestas Infantiles',
    requisitos: [
      'Espacio seguro y suficiente para juegos y actividades.',
      'Muebles adecuados para niños y zonas de descanso.',
      'Muebles adecuados para adultos (sillas y mesas).',
      'Elementos decorativos apropiados para diversas temáticas.',
      'Medidas de seguridad para prevenir accidentes.',
      'Área designada para alimentos y bebidas, con acceso a baños.',
    ],
  },
  {
    tipo: 'Salón General',
    requisitos: [
      'Área adaptable para diferentes tipos de eventos.',
      'Mesas y sillas movibles para facilitar la reconfiguración.',
      'Equipos de audio, video y conexión a internet.',
      'Sistemas de aire acondicionado y calefacción.',
      'Cumplimiento de normativas para acceso a todos los invitados.',
    ],
  },
  {
    tipo: 'Hacienda',
    requisitos: [
      'Espacio extenso, ideal para eventos al aire libre e interiores.',
      'Sillas y mesas que se integren con el entorno.',
      'Área adecuada para la preparación y servicio de alimentos.',
      'Baños suficientes y estacionamiento disponible.',
    ],
  },
  {
    tipo: 'Terraza',
    requisitos: [
      'Espacio al aire libre con vistas atractivas.',
      'Muebles cómodos y duraderos, adecuados para el clima.',
      'Carpas o sombrillas para resguardar del sol y la lluvia.',
      'Rutas de acceso adecuadas desde el nivel de la calle.',
      'Acceso a instalaciones sanitarias y opciones de estacionamiento.',
    ],
  },
];

const RequisitoItem = ({ tipo, requisitos }) => (
  <div className="requisito">
    <h3>{tipo}</h3>
    <ul>
      {requisitos.map((req, i) => (
        <li key={i}>{req}</li>
      ))}
    </ul>
  </div>
);

export const Requisitos = () => {

  return (
    <div className="requisitos-salones">
     

      
         <PaqueteList />
 



      <h2>Características Básicas de su Espacio</h2>
      <p>
        Para que el registro de su salón sea más sencillo y agradable, aquí encontrará las características básicas que su espacio debería tener:
      </p>
      {requisitos.map((salon, index) => (
        <RequisitoItem key={index} tipo={salon.tipo} requisitos={salon.requisitos} />
      ))}
    </div>
  );
};
